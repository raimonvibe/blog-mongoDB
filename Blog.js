//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
require('dotenv').config();

const homeStartingContent = "Welcome to RaimonVibe - your destination for cutting-edge insights into web development, artificial intelligence, and modern programming. I'm Raimon, a passionate developer and tech content creator sharing practical tutorials, industry trends, and innovative solutions. Whether you're a beginner looking to start your coding journey or an experienced developer seeking to stay ahead of the curve, you'll find valuable content covering JavaScript, Python, AI/ML, web frameworks, and the latest in software development. Join our growing community of developers and let's build the future of technology together.";
const aboutContent = "Hi, I'm Raimon - a software developer, content creator, and technology enthusiast with a passion for sharing knowledge and building innovative solutions. With expertise spanning full-stack web development, artificial intelligence, and modern programming frameworks, I've dedicated my career to exploring the intersection of creativity and technology. Through RaimonVibe, I create educational content across multiple platforms including YouTube tutorials, TikTok quick tips, Instagram development insights, and in-depth articles on Medium. My mission is to make complex programming concepts accessible to developers at all levels while fostering a supportive community where we can learn and grow together. When I'm not coding or creating content, you can find me exploring the latest tech trends, contributing to open-source projects on GitHub, and connecting with fellow developers worldwide.";
const contactContent = "Ready to connect and collaborate? I'd love to hear from you! Whether you have questions about programming, want to discuss potential collaborations, need technical consulting, or simply want to share your coding journey, I'm always excited to connect with fellow developers and tech enthusiasts. You can reach me through any of my social media channels linked in the footer, or feel free to send me a direct message. I'm particularly active on X (Twitter) for quick discussions, YouTube for detailed tutorials, and LinkedIn for professional networking. For business inquiries, partnership opportunities, or speaking engagements, please don't hesitate to reach out. I typically respond within 24-48 hours and look forward to being part of your development journey!";
const membershipContent = "Join the RaimonVibe Premium Community and take your development skills to the next level! Our membership program offers exclusive access to advanced tutorials, live coding sessions, personalized code reviews, and direct mentorship opportunities. Members get early access to new content, downloadable resources, project templates, and participation in our private Discord community where you can network with other passionate developers. Whether you're looking to master a new framework, prepare for technical interviews, or build your dream project, our premium content and supportive community will accelerate your growth. We offer flexible membership tiers to fit your learning goals and budget. Ready to invest in your future as a developer? Join thousands of members who are already transforming their careers with RaimonVibe Premium!";
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://[username]:[password]@cluster0.9wzmu.mongodb.net/[Database Name]", {useNewUrlParser: true});


const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){

  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
  });
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });


  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/edit", function(req, res){
  res.render("edit");
});

app.post("/edit", function(req, res){
  const post2 = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });


  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });

});

app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("edit", {
      title: post.title,
      content: post.content
    });
  });

});

app.get("/membership", function(req, res){
  res.render("membership", {membershipContent: membershipContent});
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
