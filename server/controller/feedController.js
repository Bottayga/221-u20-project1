const feedItems = require('../model/feedItem')
let item1 = {title : "Extended Interview" , body: "How did David Corenswet prep for Superman" , linkURL : "https://www.youtube.com/watch?v=aLqeqn0IA0Q" , imageURL : "images/campus.png"};
let item2 = {title : "Article of the topic" , body: "This article is towards Newbrugh schools in which we talk about how Marist has helped the students in coding classes" , linkURL : "https://www.newburghschools.org/" , imageURL : "images/news_pic.jpg"};
let item3 = {title : "Bird Bird Bird" , body: "All about birds" , linkURL : "https://en.wikipedia.org/wiki/Bird" , imageURL : "images/hancock.jpeg"};
let allFeedItems = [item1 , item2 , item3];
console.log(exports);

exports.getAllUsers = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(allFeedItems));
}

exports.getUser = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.params.id);
    res.send(JSON.stringify(allFeedItems[req.params.id]));
}

exports.saveUser = function(req, res) {
    let user = req.body;
    console.log(user);
    allFeedItems.push(user);
    res.send(JSON.stringify(allFeedItems));
}

