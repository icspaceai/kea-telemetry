# D3-attrs

Allows to set attributes and styles for d3 selection as objects.
Works fine with D3 v7 (d3-selection v3) and NodeJS v16.

## Install

`$ npm i d3-attrs -s`

## Use

```js
import 'd3-attrs';

d3.select( 'svg' ).append( 'line' )
  .attrs({
    class: 'red_line',
    x1: 0, y1: 0,
    x2: 100, y2: 50
  })
  .styles({
    stroke: 'red'
  });
```