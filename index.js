const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

/* Routes */

const userRoute = require("./routes/user");

/* General Routes */

app.get("/", (req, res) => {
    res.status(200).send("OK");
})

app.use(userRoute);

app.listen(port, () => {
    console.log(`App is listening ${port}`);
})

module.exports = app;