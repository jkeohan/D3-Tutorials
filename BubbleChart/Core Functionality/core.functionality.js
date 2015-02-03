var values = [1,2,3,4,5,6,7,8,10];

function drawBubbleChart(root){
  var diameter = 960;

  var width = 200;
      height = 400;

  var color = d3.scale.category20c();

  var bubble = d3.layout.pack()
  	.size([300,300])
  	.padding(1.5)
  	.value( function(d) { return d.size})

  var svg = d3.select("body").select(".bubbles")
              .append("svg")
              .attr("width",300)
              .attr("height", 300)
              .attr("class","bubble")
              //This centers the div
              .style({ display: "block",
                "margin-left": "auto",
                "margin-right": "auto"})

  var node = svg.selectAll(".node")
                .data(bubble.nodes(processData(values))
                .filter(function(d){ return !d.children;}))
                .enter()
                .append("g")
                .attr("class","node")
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

			 node.append("circle")
			     .attr("r", function(d) { return d.r; })
			     .style("fill", function(d) { return color(d.name) })
  
}

drawBubbleChart(processData(values))

function processData(data) {
   var obj = data
  console.log(obj.length)
   var newDataSet = [];
   for(var i=0; i < obj.length; i++) {
   	console.log(i)
      newDataSet.push( {size: obj[i]});
    }
   return {children: newDataSet};
}


