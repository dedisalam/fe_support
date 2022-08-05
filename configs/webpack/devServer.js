const { readFileSync } = require("fs");
const { resolve } = require("path");

const DevServer = () => ({
  hot: true, // enable HMR on the server
  port: 9090,
  https: {
    key: readFileSync(resolve(__dirname, "../nginx/certificate/support.key")),
    cert: readFileSync(resolve(__dirname, "../nginx/certificate/support.crt")),
  },
  historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
});

module.exports = DevServer;
