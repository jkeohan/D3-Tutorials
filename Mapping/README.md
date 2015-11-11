#D3 Mapping

This module will focus on learning mapping fundamentals as well as how to create a world map with points of interest. I've reviewed quite a bit of content while putting together this tutorial which included the following:
* Mike Bostock's tutorial ["Let's Make A Map"](http://bost.ocks.org/mike/map/) 
* "Learning D3.js Mapping" by Thomas Newton and Oscar Villarreal 
* Scott Murray's online course "Intermdiate D3 for Data Visualization" 

The following content will be covered: w
* Finding the right geographical data
* What is GeoJSON & TopoJSON
* Converting shp files to GeoJSON
* Converting shp files to TopoJSON

###Finding Data

Mike states that [Natural Earth](http://www.naturalearthdata.com/ is the most convenient source of free geographic data so we'll follow his lead and use Natural Earth datasets scaled @ 1:10,000,000 and are included in this tutorial:
* Admin 0 - Details - map subunits - Includes country polygons
* Populated Places - Names and locations of populated places

###What is GeoJSON & TopoJSON
The two JSON formats that can be used to render the map and points of interest are:
* [GeoJSON](http://geojson.org)
* [TopoJSON](https://github.com/mbostock/topojson)

GeoJSON
A specific JSON format for describing geographical data structures and contains all information to draw geographic data.  This data format is also required by the d3.geo.path function to create a polygon using an SVG path.

TopoJSON
Removes duplicate borders defined by GeoJSON which can reduce the file size by 80%.  TopoJSON is not only a JSON file but also the following:
* Command line utilty (topojson) - used to create TopoJSON files from shapefiles
* topojson.js (JS Library) - used by d3 to convert TopoJSON-serialied format back to GeoJSON so that the d3.geo.path functions work correctly. 

***Converting shp files to GeoJSON
My first intro to creating maps was after reading "Let's Make A Map" and there were many more steps in converting an shp file to TopoJSON.  The tutorial also demo'd how filter the data set to include only a handful of countries as well as merge 2 shp files. Although I will be covering those steps in the next section I thought it's worth noting that after taking Scott Murray's course discovered a much easier way to convert .shp to .json.  

So the easiest way to convert .shp files into geoJOSN is to use [mapshaper.org](http://mapshaper.org/).  This requires uploading two files:  .shp and .dbf.  Clicking on the export button with then download the conveted .json file 

[![GeoJSON](https://github.com/jkeohan/D3-Tutorials/Mapping/raw/master/Images/geojson.png)]



###Converting shp file to TopoJSON
The two tools we will need to convet the .shp files to TopoJSON are:
* NODE
* [Homebrew](http://brew.sh/) 
* [GDAL](http://www.gdal.org/)...which includes the ogr2ogr binaries

Run the following commands to install the tools and verify thier successful installation:
* brew install node //installs node
* brew install gdal //installs gdal
* npm install -g topojson //installs topojson
* which ogr2ogr //verify ogr2ogr install
* which topojson  ////verify topojson install

You may first need to install Homebrew and it's as easy as following the instuctions [here](http://thechangelog.com/install-node-js-with-homebrew-on-os-x/).  I didn't install it but it's quite possible that it was installed as part of the General Assembly setup script.  I'll have to follow up to confirm. 

Once the tools have been installed we can now create a single TopoJSON file by merging the Admin 0 and Populated Places shapefiles.  



References
* [Interactive Data Virtualization for the Web](http://chimera.labs.oreilly.com/books/1230000000345/ch12.html)
* [Interactive Map with D3.js](http://www.tnoda.com/blog/2013-12-07)
* [Mapshaper](http://mapshaper.org/)
* [Let's Make A Map](http://bost.ocks.org/mike/map/)
