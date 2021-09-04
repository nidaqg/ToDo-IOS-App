const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session");
const models = require("./models");
const routes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.set('trust proxy', 1) // trust first proxy
  // sess.cookie.secure = true // serve secure cookies
}

const sess = {
  secret: "Super secret secret",
  cookie: {
     //Session expiration is set to 60 minutes
    // expires: 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Send every request to the React app
// Define any API routes before this runs
app.use(routes);
 app.get("/*", function (req, res) {
   res.sendFile(path.join(__dirname, "/client/build/index.html"));
 });


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
