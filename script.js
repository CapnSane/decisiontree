const data = require('./dados.js');

function run_tree(d) {
  if (d.moth_count <= 2.5) {
    if (d.exposure <= 0.523) {
      if (d.fill_factor <= 0.188) {
        return 'baixo'
      } else {
        return 'médio'
      }
    } else {
      return 'baixo'
    }
  } else {
    if (d.fill_factor <= 0.895) {
      if (d.moth_count <= 21.5) {
        return 'médio'
      } else {
        return 'alto'
      }
    } else {
      return 'alto'
    }
  } 
}

const jorge = {};
for (let i = 0; i < data.length; i++) {
  jorge[data[i].filename] = run_tree(data[i]);
}

console.log('resultado = ', jorge);