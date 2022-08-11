const CracoLessPlugin = require("craco-less");
const modifyVars = require("./theme");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true,
        },
      ],
    ],
  },
};
