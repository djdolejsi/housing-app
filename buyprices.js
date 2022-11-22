//
let trace1 = {
  x: ['Allen', 'Dallas', 'Frisco', 'Garland', 'Plano'],
  y: [525565, 751442, 745592, 375569, 638426],
  name: 'DFW Average List Price by City', 
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 0.7},
  type: 'bar'
};

let trace2 = {
  x: ['Allen', 'Dallas', 'Frisco', 'Garland', 'Plano'],
  y: [539000, 460000, 640000, 330000, 529000],
  name: 'Median List Price as of October 2022',
   marker: {
    color: 'rgb(204,204,204)',
    opacity: 0.5},
  type: 'bar'

};

let data = [trace1, trace2];

let layout = {title:'Current List Price Comparison', 
  barmode: 'group'};

Plotly.newPlot('plot', data, layout, {scrollzoom:true});
