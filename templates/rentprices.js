
let trace1 = {
  x: ['Allen', 'Dallas', 'Frisco', 'Garland', 'Plano'],
  y: [1966 , 1484, 2811, 1941, 2362],
  name: 'DFW Average Rental List Price',
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 0.7},
  type: 'bar'
};

let trace2 = {
  x: ['Allen', 'Dallas', 'Frisco', 'Garland', 'Plano'],
  y: [2450, 1999, 2730, 2100, 2600],
  name: 'Median Rental Price as of October 2022',
   marker: {
    color: 'rgb(204,204,204)',
    opacity: 0.5},
  type: 'bar'

};

let data = [trace1, trace2];

let layout = {title:'Current Rental Price Comparison', 
  barmode: 'group'};


Plotly.newPlot('plot', data, layout, {scrollZoom: true});
