const data = require('./dados.js');

function run_tree(d) {
  return (d.moth_count <= 2.5 ? (d.exposure <= 0.523 ? (d.fill_factor <= 0.188 ? 'baixo' : 'médio') : 'baixo') : (d.fill_factor <= 0.895 ? (d.moth_count <= 21.5 ? 'médio' : 'alto') : 'alto'))
}

const jorge = {};
for (let i = 0; i < data.length; i++) {
  jorge[data[i].filename] = run_tree(data[i]);
}

console.log('resultado = ', jorge);