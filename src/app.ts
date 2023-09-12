import "dotenv/config";

import express from "express";
import cors from "cors";
import routers from "./router/";

const PORT = process.env.PORT;

const app = express();

// create middleware for cors
app.use(
  cors({
    credentials: true,
  })
);

// create middleware for parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers
app.use("/", routers());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
