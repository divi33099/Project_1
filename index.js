const app = require("./app");

// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000;

// start the server
app.listen(port, () => {
  console.log(`Voting app server listening at http://localhost:${port}`);
});
