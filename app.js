const express = require("express");
const os = require("os");

const app = express();

app.use("/", (req, res) => {
  res.json({ message: "It Worked...!", hostname: os.hostname() });
});

app.listen(3000, () => {
  console.log(`Server started on host: ${os.hostname()} on port 3000`);
});
