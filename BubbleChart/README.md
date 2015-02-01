#Creating a Bubble Chart
D3 provides several [layouts](https://github.com/mbostock/d3/wiki/Layouts) that can be used to display data.  Let's work through creating a Bubble Chart using the [Pack](https://github.com/mbostock/d3/wiki/Pack-Layout) layout. There are several awsome examples on using this layout so take a minute to review some of the follow links to get a better idea:

* [Four Ways to Slice Obama’s 2013 Budget Proposal] by Mike Bostok (http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html?_r=0)
* Additional examples

##Getting Started

As always the most practical and tangible way to learn how to build any chart is to use a real world example.  This tutorial will use the following [json data](https://github.com/jkeohan/D3-Tutorials/blob/master/BubbleChart/random-thoughts.json) pulled from the [Random Thoughts](http://randomthoughts.link/) web site created by my friend Alex Deschamps midway through our 3 month Immersive Web Development class at GA.  He knew I had been studying D3 since the class started and after a few short discussions we agreed that the sites "cool" factor could be extended by incorporating some D3 data visualization.  However being that I had not yet used this type of layout before some additional research was needed to famliarize myself with it's configuration and subtle nuances.  I was lucky enough to come across the following sites that helped me along the way and hope this tutorial can follow suit in doing the same for others interested in using pack layout.

* [Use D3 Component Layouts](http://www.ibm.com/developerworks/library/os-dataviz2/)
* [Fun with D3](http://www.developer.com/java/fun-with-d3.js-data-visualization-eye-candy-with-streaming-json.html)

