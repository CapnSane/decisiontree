const data = require("./dados.js");
const tree = require("./arvore.js");

function run_tree(branch, d) {
  return typeof branch != "string"
    ? d[branch.feature] <= branch.value
      ? run_tree(branch.lte_branch, d)
      : run_tree(branch.gt_branch, d)
    : branch;
}

const jorge = {};
for (let i = 0; i < data.length; i++) {
  jorge[data[i].filename] = run_tree(tree, data[i]);
}

console.log('resultado = ', jorge);
