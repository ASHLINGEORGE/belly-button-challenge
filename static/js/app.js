const jsonDataUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

var selectedID; // Declare selectedID globally

// Initialize the plot with default data
function initialize() {
  d3.json(jsonDataUrl).then((data) => {
    // Get a list of all the sample IDs
    var sampleID = data.names;

    // Create the drop-down menu by inserting every sample ID
    const dropdown = d3.select('#selDataset');

    sampleID.forEach(id => {
      dropdown.append('option')
        .text(id)
        .property("value", id);
    });

    // Use the getSelectedID function to select the current ID and store it in the global variable
    selectedID = getSelectedID();
    console.log("Selected ID on initialization:", selectedID);

    // Call the updatePlot function to initialize the plot with the default value
    updatePlot(data, selectedID);
  });
}

// Function to update the plot based on the selected ID
function updatePlot(data, selectedID) {
  // Filter the data for the selected ID to get relevant information
  var selectedSampleData = data.samples.find(entry => entry.id === selectedID);
  console.log("Selected Sample Data:", selectedSampleData);

  // Create Trace for the horizontal bar chart
  var barChartTrace = {
    x: selectedSampleData.sample_values.slice(0, 10).reverse(),
    y: selectedSampleData.otu_ids.slice(0, 10).reverse().map(int => "OTU " + int.toString()),
    text: selectedSampleData.otu_labels.slice(0, 10).reverse(),
    type: "bar",
    orientation: 'h'
  };
  console.log("Bar Chart Trace:", barChartTrace);

  // Data
  var barChartData = [barChartTrace];

  // Layout
  var barChartLayout = {
    title: 'Top 10 OTU samples',
    height: 600,
    width: 600
  };
  console.log("Bar Chart Layout:", barChartLayout);

  // Update the existing bar chart with the new data and layout
  Plotly.react("bar", barChartData, barChartLayout);

  // For the bubble chart, make sure you have the necessary data available
  // Define otuIds, sampleValues, and otuLabels appropriately
  var otuIds = selectedSampleData.otu_ids;
  var sampleValues = selectedSampleData.sample_values;
  var otuLabels = selectedSampleData.otu_labels;
  console.log("OTU IDs:", otuIds);
  console.log("Sample Values:", sampleValues);
  console.log("OTU Labels:", otuLabels);

  var bubbleChartTrace = {
    x: otuIds,
    y: sampleValues,
    text: otuLabels,
    mode: 'markers',
    marker: {
      color: otuIds, // This will map the OTU IDs to a color scale
      size: sampleValues,
      colorscale: 'Earth' 
    }
  };  
  console.log("Bubble Chart Trace:", bubbleChartTrace);

  var bubbleChartLayout = {
    title: 'Bubble Chart',
    xaxis: { title: 'OTU IDs' },
    yaxis: { title: 'Sample Values' },
    height: 600,
    width: 1200
  };
  console.log("Bubble Chart Layout:", bubbleChartLayout);

  Plotly.react('bubble', [bubbleChartTrace], bubbleChartLayout);

  // Retrieve metadata for the selected sample
  var metadata = data.metadata.find(meta => meta.id === parseInt(selectedID));
  console.log("Selected Metadata:", metadata);

  var sampleMetadata = d3.select("#sample-metadata");
  sampleMetadata.html(""); // Clear existing content
  Object.entries(metadata).forEach(([key, value]) => {
    sampleMetadata.append("p").text(`${key}: ${value}`);
  });

  // Call the gauge function with the appropriate parameters
  gauge(metadata.wfreq);
}

// Function to handle the dropdown change event
function optionChanged() {
  // Use the getSelectedID function to select the current ID and store it in the global variable
  selectedID = getSelectedID();
  console.log("Selected ID on dropdown change:", selectedID);

  // Call the updatePlot function with the selected ID to update the plot
  d3.json(jsonDataUrl).then((data) => {
    updatePlot(data, selectedID);
  });
}

// Function to retrieve the selected ID from the dropdown
function getSelectedID() {
  return d3.select("#selDataset").property("value");
}

// Call the initialize function to populate the drop-down menu and initialize the plot when the page loads
initialize();