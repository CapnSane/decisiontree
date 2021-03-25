module.exports  = {
  feature: "moth_count",
  value: 2.5,
  lte_branch: {
    // less than equals branch
    feature: "exposure",
    value: 0.523,
    lte_branch: {
      feature: "fill_factor",
      value: 0.188,
      lte_branch: "low",
      gt_branch: "medium",
    },
    gt_branch: "low",
  },
  gt_branch: {
    // greater than branch
    feature: "fill_factor",
    value: 0.895,
    lte_branch: {
      feature: "moth_count",
      value: 21.5,
      lte_branch: "medium",
      gt_branch: "high",
    },
    gt_branch: "high",
  },
};