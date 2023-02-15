const express = require("express");
const cors = require("cors");

const app = express();
app.set("port",process.env.PORT || 6969);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ msg: "Welcome" });
});

app.listen(app.get("port"), () => {
    console.log(`Listening for calls on port ${app.get("port")}`);
    console.log("Press Ctrl + C to exit server");
});