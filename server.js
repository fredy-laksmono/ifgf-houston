const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const db = require("./db");

const AppRouter = require("./routes/AppRouter");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.use(express.json());
app.use(logger("dev"));
app.use(express.static(`${__dirname}/client/build`));
app.use("/api", AppRouter);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
