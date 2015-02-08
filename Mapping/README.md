#D3 Mapping

This module will focus on learning mapping fundamentals and how to create a world map with points of interest.  It is more of a synopsis of Mike Bostock's tutorial ["Let's Make A Map"](http://bost.ocks.org/mike/map/) so i urge that you give it thorough reading as this tutorial will not do it justice.  I was also reading "Learning D3.js Mapping" by Thomas Newton and Oscar Villarreal during this time so I'll be sure to include quite a few references from there as well. 

Once completed it will look similiar to this:

Pic goes here

We will cover the following:
* Finding Data
* Installing Tools

###Finding Data

Mike states that [Natural Earth](http://www.naturalearthdata.com/ is the most convenient source of free geographic data so we'll follow his lead and use two 1:1e7...NOTE: discuss what is 1:1e7....  Natural Earth datasets which are included in this tutorial:
* Admin 0 - Details - map subunits - Includes country polygons
* Populated Places - Names and locations of populated places

###Installing Tools

The two tools we will need to manipulate the Natural Earth datasets are:
* NODE
* [Homebrew](http://brew.sh/) 
* [GDAL](http://www.gdal.org/)...which includes the ogr2ogr binaries

Run the following commands to install the tools and verify thier successful installation:
* brew install node
* bew install gdal
* npm install -g topojson
* which ogr2ogr
* which topojson

You may first need to install Homebrew and it's as easy as following the instuctions [here](http://thechangelog.com/install-node-js-with-homebrew-on-os-x/).  I didn't install it but it's quite possible that it was installed as part of the General Assembly setup script.  I'll have to follow up to confirm. 

***Converting Data
The two JSON formats that will be needed to render the map and points of interest are:
* TopoJSON
* [GeoJSON](http://geojson.org)

GeoJSON
A specific JSON format for describing geographical data structures and contains all information to draw geographic data.  This data format is also required by the d3.geo.path function to create a polygon using an SVG path.

TopoJSON
Removes duplicate borders defined by GeoJSON which can reduce the file size by 80%.  TopoJSON is not only a JSON file but also the following:
* Command line utilty (topojson) - used to create TopoJSON files from shapefiles
* topojson.js (JS Library) - used by d3 to convert TopoJSON-serialied format back to GeoJSON so that the d3.geo.path functions work correctly. 

Once the tools have been installed we can now create a single TopoJSON file by merging the Admin 0 and Populated Places shapefiles.  
