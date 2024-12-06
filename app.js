const express = require("express");
const app = express();

app.set("view engine", "ejs");

const mydb = require("./config/mydb");
const usermodel = require("./models/usermodel");
const postmodel = require("./models/postmodel");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/user", async function (req, res) {
  const user = await usermodel.create({
    name: "kunal",
    age: 20,
    password: "kunal123",
    posts: [],
  });
  res.send(user);
});

app.get("/post", async function (req, res) {
  const post = await postmodel.create({
    postdata: "hii how are you?",
    userid: "674ffdbc30ade8f6b1bcb60a",
  });

  const tuser = await usermodel.findOne({ _id: "674ffdbc30ade8f6b1bcb60a" });
  tuser.posts.push(tuser._id);
  await tuser.save();

  res.send({ tuser, post });
});

app.listen(3000);
