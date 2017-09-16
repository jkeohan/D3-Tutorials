### D3-React

Initially after writing the code in the tutorial I ran into the following errors:

This one was easy enough to fix and was only missing an expression {} in JSX.
```
./src/components/Alphabet.js
Syntax error: JSX value should be either an expression or a quoted JSX text (25:41)

  23 |         <ReactTransitionGroup component="g"> 
  24 |           {this.state.alphabet.map((d,i) => (
> 25 |             <Letter letter={d} i={i} key=`letter-${d}` />
     |                                          ^
  26 |           ))}
  27 |         </ReactTransitionGroup>
  28 |       </g>
```



Another simple one to fix.  The property is fillOpacity and not fill-opacity. 
```
./src/components/Letter.js
Syntax error: Unexpected token, expected , (24:32)

  22 |       .attr('y',0).style('fill-opacity',1)
  23 |       .on('end', () => {
> 24 |         this.setState({y:0, fill-opacity:1, color:UpdateColor});
     |                                 ^
  25 |         callback()
  26 |       })
  27 |   }
```


After the obvious syntax errors have been addressed I encountered the another logic error during the import of the group where I had called TransitionGroup and not ReactTransitionGroup
```
./src/components/Alphabet.js
  Line 23:  'ReactTransitionGroup' is not defined  react/jsx-no-undef
```


There was one more syntax error in the misspelling of `transition` and then the page loaded...however nothing appeared...Developer Tools showed the following error:

```
proxyConsole.js:56 Warning: Unknown prop `transfrom` on <g> tag. Remove this prop from the element. For details, see https://fb.me/react-unknown-prop
    in g (at Alphabet.js:22)
    in Alphabet (at App.js:9)
    in svg (at App.js:8)
    in div (at App.js:7)
    in App (at index.js:7)
```


Finally with all errors resolved the page still displayed nothing...It's clear that the inital letters are being drawn as I can see the elements in the elements tab but console logging this.state in componentWillMount in Alphabet.js displays and empty array.

Adding a console.log in render() to show the alphabet array show that the d3.interval is running but crazy fast and not at the speed defined.  This was due to yet another typo in where i put the closing {} for d3.interval.  Once that was done I could see it running at the pace it should, however still no letters being displayed on the page.  

Ok...So I have to admit...I can't type for shit.  After the slew of errors I found myself getting closer to resolving the issue...and guess what...it was yet another typo.  In the render() method of Letter I had typed `ref=leffer` instead of `ref=letter`.  

```
  return (
      <text dy=".35em" x={x} y={y} style={
        {fillOpacity: fillOpacity,fill: color, font: 'bold 48px monospace'}}
        ref="leffer">
        {this.props.letter}
      </text>
    );
```

This however didn't fully resolve the issue as the only property updating via the Elements tab was the `x` coordinate.  The letters still did not appear on the screen.

Back to the drawing board...or better yet...another round of google searches...Now since I'm not familiar with ReactTransitionGroup I decided to start there and after a few sites came across the same article by Swizec callsed [using-d3js-transitions-in-react](https://swizec.com/blog/using-d3js-transitions-in-react/swizec/6797). The first thing I noticed was that he was importing `react-addons-transition-group` instead of `react-transition-group/TransitionGroup`, which was how he referenced it in his book.  So I updated the code to include the following and low and behold the letters appeared on the screen.  

```
import ReactTransitionGroup from 'react-addons-transition-group' 
```

Sometimes I think the JavaScript gods are either challenging my patience or ability to troubleshoot as for a brief moment the letters appeared to drop into position and change colors but then the site erred out with the following:

```
×
←→1 of 5 errors on the page
Error: too late
▶ 6 stack frames were collapsed.
Letter.componentWillLeave
src/components/Letter.js:36
  33 | let node = d3.select(this.refs.letter);
  34 | this.setState({color: ExitColor});
  35 | 
> 36 | node.transition(this.transition)
  37 |   .attr('y',60).style('fill-opacity',1e-6)
  38 |   .on('end', () => {
  39 |     this.setState({y: 60, fillOpacity: 1e-6});
View compiled
▶ 2 stack frames were collapsed.
SVGTextElement.<anonymous>
src/components/Letter.js:27
  24 |     .attr('y',0).style('fill-opacity',1)
  25 |     .on('end', () => {
  26 |       this.setState({y:0, fillOpacity:1, color:UpdateColor});
> 27 |       callback()
  28 |     })
  29 | }
  30 | 
View compiled
▶ 4 stack frames were collapsed.
```

One thing I've come across in the past when troubleshooting transitions was that one transition would execute too soon or too late and that would cause unexpected results.  Now during my initial troubleshooting I changed the speed of set d3.interval from `1500` to `500` so I changed it back and everything worked as expected. 

### References

- [React Animations by Joe Morgan](http://www.thejoemorgan.com/blog/2016/09/23/react-animations/)
