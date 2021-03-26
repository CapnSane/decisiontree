const data = require("./dados.js");
const tree = require("./arvore.js");

function run_tree(branch, d) {
  if (typeof branch != "string") {
    if (d[branch.feature] <= branch.value) {
      return run_tree(branch.lte_branch, d);
    } else {
      return run_tree(branch.gt_branch, d);
    }
  } else {
    return branch;
  }
}

const jorge = {};
for (let i = 0; i < data.length; i++) {
  jorge[data[i].filename] = run_tree(tree, data[i]);
}

console.log('resultado = ', jorge);