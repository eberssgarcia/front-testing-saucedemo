module.exports = {
  default: [
    "--require-module ts-node/register",
    "--require src/steps/**/*.ts",
    "--require src/support/**/*.ts",
    "--publish-quiet",
    "--format progress-bar",
    "--format html:reports/cucumber-report.html",
    "features/**/*.feature"
  ].join(" ")
};
