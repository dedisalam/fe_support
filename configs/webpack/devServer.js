const DevServer = () => ({
  hot: true, // enable HMR on the server
  port: 3080,
  historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
});

module.exports = DevServer;
