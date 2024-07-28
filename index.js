const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * Line 12
 * Express static will give the path for the static folder in the project, __dirname gets the path for the project and .join will join the
 * pathname with the next mentioned param folder name 
 */

app.use(express.static(path.join(__dirname, "public")));

/**
 * Setting the view types as ejs which is a powerful template kind of HTMl, but has more options like dynamic rendring etc.
 */

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("form");
});

/**
 * Dynamic routing is used whenever any route is changing except the URL, just append the route name with : that needs to be treated as
 *  dynamic route
 */

app.get("/profile/:username", (req, res) => {
    res.send(`Welcome ${req.params.username}`);
})

app.listen(3001, () => {
    console.log("Server running at port 3001");
});