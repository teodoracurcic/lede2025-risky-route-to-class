# The Risky Route to Class

This project was created as part of the [Lede Program](https://ledeprogram.com) at Columbia Journalism School. It investigates the relationship between traffic accidents and school locations in Belgrade, Serbia, over a nine-year period. By combining spatial analysis with official accident data and school addresses, the goal was to identify how exposed students are to unsafe traffic conditions on their way to class.

The full interactive story is available at:  
[https://teodoracurcic.github.io/lede2025-risky-route-to-class/index.html](https://teodoracurcic.github.io/lede2025-risky-route-to-class/index.html)

## What I set out to explore

In a city where traffic planning rarely accounts for pedestrians—especially children—I wanted to understand how dangerous it is to walk to school in Belgrade. The core question was: where are the zones with the highest concentration of traffic accidents, and how close are they to elementary and high schools.

## What I found

The data shows that two out of three recorded traffic accidents in Belgrade happened within 250 meters of a school. The highest concentration of accidents is in the city center, precisely where schools are most densely located. Central municipalities like Stari Grad and Savski Venac alone account for more than one-third of all accidents that occurred within walking distance of schools.

The final interactive map walks users through this finding step by step, combining spatial layers with scrollytelling chapters and embedded charts.

## Data Collection

I used two main data sources:

- **Traffic accidents**: Official datasets from the [Serbian police](https://data.gov.rs/sr/datasets/podatsi-o-saobratshajnim-nezgodama-po-politsijskim-upravama-i-opshtinama/), covering the years 2016 through 2024. The data includes geographic coordinates, timestamps, and incident types. I excluded 2015 due to incomplete entries.
- **School locations**: Public records from the [Serbian Ministry of Education](https://opendata.mpn.gov.rs), filtered and geocoded to extract coordinates for all elementary and high schools in Belgrade.

I performed additional geocoding in Python using the `geocoder` library and Google Maps API.

## Data Analysis Process

Data cleaning and processing done in Python using `pandas` and `geopandas`:

- Cleaned, merged, and translated datasets
- Geocoded school addresses to generate latitude and longitude
- Converted both accident and school data to spatial format using EPSG:32634
- Created buffers around each school and determined that 66.7% of all accidents happened within a 250-meter radius

Also, outisde of Python I have:
- Created a 500×500 meter grid across the city in QGIS
- Counted the number of accidents and schools per grid cell using spatial joins
- Categorized risk zones based on accident density
- Calculated how many schools fall within high-risk areas
- Built visualizations in Datawrapper and an interactive scrollytelling map using Mapbox and Scrollama

## New Skills and Challenges

This was my first time combining Python, QGIS, and Mapbox in a full data pipeline. I learned how to:

- Geocode and clean messy address data
- Create and apply spatial joins in GeoPandas and QGIS
- Export spatial files into formats usable in Mapbox Studio
- Customize a scrollytelling interface with a `config.js` file and build a full HTML/CSS/JS project from scratch
- Integrate animated layers and charts into a web-based storytelling format

Most of all, I became more confident in switching between environments—data cleaning in Python, mapping in QGIS, styling in Mapbox, and web development in VS Code.

## What I didn’t get to

If I had more time, I would have:

- Compared urban vs suburban school zones in more detail
- Conducted interviews with traffic experts or school representatives to add context
- Built animations to show how accident density has changed year by year
- Made the project more mobile-optimized and included a "start over" or navigation menu in the UI
- Incorporated official walking route data or parental surveys

## Files and Notebooks

- All Python notebooks are documented and include markdown explanations.  
  Main notebook: `traffic_analysis.ipynb` (not yet published to this repo)  
- Final HTML, JS, and config files are in the project folder and published via GitHub Pages
- QGIS files are referenced but not hosted 

## Data Disclaimer

The data used for analysis is based on public records and may contain geocoding inaccuracies or unreported incidents. This project was intended as a practice exercise and is not a finalized journalistic investigation. It has not been edited or fact-checked, and no outreach has been done to public institutions.

## .gitignore

Geocoder API keys have been excluded using a `.gitignore` file.

## Author

Teodora Curcic  
Data journalist  
[GitHub](https://github.com/teodoracurcic)  
[LinkedIn](https://www.linkedin.com/in/teodora-curcic-27a93884/)
