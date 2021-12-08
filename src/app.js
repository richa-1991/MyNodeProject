const express = require("express");
require("dotenv").config();
const app = express();
const routes = require("../src/routers/empRoute");
require("../src/db/conn");

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
