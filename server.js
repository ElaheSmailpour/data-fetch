
const express = require("express");

const app = express();
var path = require("path");
const todoRouter=require("./router/todorouter")
app.use(express.static("public"));
// relativen Pfad ./build als statisches Verzeichnis ausliefern
app.use(express.static("build"));
const verbindeDB = require("./mongo-db");
verbindeDB();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/todos",todoRouter)




app.get("*", (req, res, next) => {
	res.status(404).send("Diesen Pfad gibt es nicht");
});
const port = process.env.PORT || 5000;

app.listen(port, () => { console.log("server connect ..." + port) })