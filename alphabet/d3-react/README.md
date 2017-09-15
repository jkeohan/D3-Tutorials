### D3-React

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


After syntax errors have been addressed this was the next error. This was a typo during the import of the group where I had called TransitionGroup and not ReactTransitionGroup
```
./src/components/Alphabet.js
  Line 23:  'ReactTransitionGroup' is not defined  react/jsx-no-undef
```


THere was one more syntax error in the misspelling of `transition` and then the page loaded...however nothing appeared...Developer Tools showed the following error:

```
proxyConsole.js:56 Warning: Unknown prop `transfrom` on <g> tag. Remove this prop from the element. For details, see https://fb.me/react-unknown-prop
    in g (at Alphabet.js:22)
    in Alphabet (at App.js:9)
    in svg (at App.js:8)
    in div (at App.js:7)
    in App (at index.js:7)
```


Finally with all errors resolved the page still displayed nothing...It's clear that the letters are being drawn as I can see the elements but console logging the this.state in componentWillMount in Alphabet.js displays and empty array.

Adding a console.log in render() to show the alphabet array show that the d3.interval is running but crazy fast and not at the speed defined.  This was due to a typo in where i put the closing {} for d3.interval.  Once that was done I could see it running at the pace it should, however still no letters. 
