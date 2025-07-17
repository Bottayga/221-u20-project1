const express = require('express')
const app = express();
app.use(express.static('client/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json({type: 'application/json'}))
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})
const feedController = require('./Controller/feedController');
app.route('/api/allFeedItems')
    .get(feedController.getAllUsers)
    .post(feedController.saveUser)
app.route('/api/allFeedItems/:id')
    .get(feedController.getUser);
    app.get('/feed', function(req, res) {
        res.sendFile('feed.html', {root: './client/views'})
    })
    app.get('/api/feed', function(req, res) {
        res.sendFile('' , {root: './client/views'})
    })
    app.listen(1337, () => console.log('Listening on port 1337.'))
