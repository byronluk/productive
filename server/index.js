/* eslint no-console: "off" */
const server = require('./server');

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`App is listening on http://localhost: ${port}`);
});
