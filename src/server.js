const express = require("express");
const cors = require("cors");
const app = express();
// const { helloworld } = require("./controllers");

const helloRouter = require("./routes");


app.use(express.json());
app.use(cors())
// app.get("/hello", helloworld);
app.use(helloRouter);

app.listen(5000, () => {
    console.log("Listoning on port 5000");
});