var fill = d3.scale.category20();

var thought = {
  "thoughts" : [
    {"word" : "love",
    "count": 100
    },

    {"word" : "you",
    "count": 80
    },

    {"word" : "as",
    "count": 60
    },

    {"word" : "much",
    "count" : 40
    },
     {"word" : "about",
    "count": 100
    },

    {"word" : "friends",
    "count": 80
    },

    {"word" : "run",
    "count": 60
    },

    {"word" : "away",
    "count" : 11
    },

    {"word" : "carefree",
    "count": 10
    },

    {"word" : "appalacian",
    "count": 2
    },

    {"word" : "hypocritical",
    "count" : 3
    }
  ]
}

var json_stringify = JSON.stringify(thought)
var json_parse = JSON.parse(json_stringify)

//console.log(json_parse["thoughts"].forEach( function(data) { console.log(data["word"])}))

drawWordCloud(thought) 

function drawWordCloud(data) {
    d3.layout.cloud().size([300, 300])
      .words(processData(data))
      // .words([
      //   ".NET", "Silverlight", "jQuery", "CSS3", "HTML5", "JavaScript", "SQL","C#"].map(function(d) {
      //   return {text: d, size: 10 + Math.random() * 50};
      // }))
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return d.size; })
      .on("end", draw)
      .start();

    function draw(words) {
      d3.select(".wordcloud").append("svg")
          .attr("width", 300)
          .attr("height", 300)
          .attr("class", "wordcloud")
        .append("g")
          .attr("transform", "translate(150,150)")
        .selectAll("text")
          .data(words)
        .enter().append("text")
         .transition().duration(2000)
          .style("font-size", function(d) { return d.size + "px"; })
          .style("font-family", "Indie Flower") 
          .style("fill", function(d, i) { return fill(i); })
          .attr("text-anchor", "middle")
          .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function(d) { return d.text; });
    }
}

function processData(data) {
  var obj = data.thoughts
  // console.log(obj)
  var newDataSet = [];
  for(var i in obj) {
    //if( !(obj[i].count <= 10 && obj[i].word.length > 5)) {
    //console.log(obj[i])
    newDataSet.push( {text: obj[i].word, 
       className: obj[i].word.toLowerCase(), size: obj[i].count});
    //}
  }
  return newDataSet;
  }


//console.log(processData(thought))
