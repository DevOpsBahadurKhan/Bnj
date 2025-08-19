// config/index.js
import 'dotenv/config';

const env = process.env.NODE_ENV;

let config;

if (env === 'production') {
  config = await import('./production.js');
} else if (env === 'test') {
  config = await import('./test.js');
} else {
  config = await import('./development.js');
}

export default config.default;  // Return the default export of the imported module
