import { readFileSync } from 'fs';
import { resolve } from 'path';
import type { Configuration } from 'webpack-dev-server';

const DevServer = (): Configuration => ({
  hot: true, // enable HMR on the server
  port: 9090,
  https: {
    key: readFileSync(resolve(__dirname, '../nginx/certificate/support.key')),
    cert: readFileSync(
      resolve(__dirname, '../nginx/certificate/support.crt'),
    ),
  },
  historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
});

export default DevServer;
