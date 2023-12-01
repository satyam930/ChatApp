const express = require("express");
const cors = require("cors");
const connectDb = require("./db");
const router = require("./routes/UserRoutes");
const postRouter = require("./routes/PostRoutes");
const app = express();

app.use(express.json());
app.use(cors());
connectDb();

app.use(router);
app.use(postRouter);

app.listen(8000, () => {
  console.log(`server running on port 3000`);
});
