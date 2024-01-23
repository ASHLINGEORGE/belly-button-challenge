# Interactive Web Visualization


This project utilizes the D3 library to create an interactive web visualization. The goal is to read in data from a JSON file and display it in the form of a horizontal bar chart, a bubble chart, and sample metadata. This README provides an overview of the project and instructions on how to use it.


## Tools Used

This project was built using the following tools and technologies:

D3 Library: D3.js (Data-Driven Documents) is a powerful JavaScript library for data visualization on the web. It was used to create the interactive charts in this project.

JavaScript: JavaScript is the primary programming language used for creating the interactivity and functionality of the web page.

HTML and CSS: HTML was used for structuring the web page, and CSS was used for styling.

GitHub: The project is hosted on GitHub, which allows for version control, collaboration, and sharing.## Features
## Horizontal Bar Chart
The horizontal bar chart in this project is designed to showcase the top 10 Operational Taxonomic Units (OTUs) discovered in an individual's dataset. It utilizes the sample_values as the data values for the bars, while the labels for these bars are extracted from the otu_ids. Moreover, the chart provides an interactive feature where hovering over each bar will reveal additional information sourced from the otu_labels. This visualization offers a clear and informative representation of the most prevalent OTUs found in the data.
## Bubble Chart
The project includes a bubble chart that visualizes each sample's data. For this chart, the x-axis values are derived from the otu_ids, while the y-axis values are based on the sample_values. The marker sizes are dynamically determined by the sample_values, providing a visual representation of their magnitudes. Additionally, the marker colors are assigned based on the corresponding otu_ids, allowing for easy differentiation. To enhance clarity, text labels for the markers are extracted from the otu_labels. This chart provides a comprehensive view of the data distribution across various samples.

## Sample Metadata
The project also offers a section dedicated to displaying sample metadata, which includes valuable demographic information about the individual associated with the data. Each key-value pair from the metadata JSON object is prominently visible, allowing users to gain insights into the context and characteristics of the samples being analyzed.

## Dropdown Menu
To enhance user interactivity, the project features a dropdown menu. This menu enables users to effortlessly select different samples, making it easier to explore the data comprehensively. What sets it apart is its dynamic functionality – selecting a new sample from the dropdown menu automatically triggers updates to all the plots and sample metadata. This seamless integration ensures a smooth and efficient user experience while exploring the data from various perspectives.

## Deployment

Link for the webpage: https://ashlingeorge.github.io/belly-button-challenge/


## Authors

- [Ashlin Shinu George](https://github.com/ASHLINGEORGE)


## Acknowledgements

D3 library , UNC Chapel Hill Bootcamp Datasource

I would like to thank the D3 library and the data source for making this project possible.
