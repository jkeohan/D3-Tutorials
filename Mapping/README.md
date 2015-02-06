#D3 Mapping

This module will focus on learning mapping fundamentals and how to create a world map with points of interest.  It is more of a synopsis of Mike Bostock's tutorial ["Let's Make A Map"](http://bost.ocks.org/mike/map/) so i urge that you give it thorough reading as this tutorial will not do it justice. 

Once completed it will look similiar to this:

Pic goes here

We will cover the following:
* Finding Data
* Installing Tools
* 

###Finding Data

Mike states that [Natural Earth](http://www.naturalearthdata.com/ is the most convenient source of free geographic data so we'll follow his lead and use two 1:1e7...NOTE: discuss what is 1:1e7....  Natural Earth datasets which are included in this tutorial:
* Admin 0 - Details - map subunits - Includes country polygons
* Populated Places - Names and locations of populated places

###Installing Tools
The two tools we will need to manipulate the Natural Earth datasets are:
* NODE
* [Homebrew](http://brew.sh/) 
* GDAL...which includes the ogr2ogr binaries

Run the following commands to install the tools and verify thier successful installation:
* brew install node
* bew install gdal
* npm install -g topojson
* which ogr2ogr
* which topojson

You may first need to install Homebrew and it's as easy as following the instuctions [here](http://thechangelog.com/install-node-js-with-homebrew-on-os-x/).  I didn't install it but it's quite possible that it was installed as part of the General Assembly setup script.  I'll have to follow up to confirm. 

***Converting Data
