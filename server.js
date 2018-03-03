var express = require('express');
var path = require('path');
var twit = require('twit');
app = express();
var Twitter = new twit({
  consumer_key:        'M0CPCCN0QrMZRrlEtO2KOIl6o',
  consumer_secret:      'gjutBrj1GqN3F6BdRhETxT6HqWD5A6Hqi0ea56NenrsxQz682J',
  access_token:         '967096944890994688-rwzoSYJxIMkiutnIepE1nQMpJKq1sKU',
  access_token_secret:  '07RDuEPIUH7OSKxzCMNGN7QDsmroPtI7dmme3PXXU7wVg'
  });

app.use('/static', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/tweets/:q/:id?', function (req, res) {
  console.log('==>',req.params)
  var id = req.params.id;
  var params = {
        q:  decodeURIComponent(req.params.q),
        result_type: 'recent',
        lang: 'en',
        count: 10,
  }
  if (id) {
    params.max_id = id;
  }
  Twitter.get('search/tweets', params, function(err, data) {
    if (err) return res.status(500).json({error: err});

    return res.json( { tweets: data } );
  });
});

app.listen(3333, function(err) {
  if (err) return console.log(err);
  console.log('Listening on port 3333');
})
