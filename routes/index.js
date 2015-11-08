var express = require('express');
var router = express.Router();
var d = require('../data.json');
//var r = require('../getData.js');
//var myResults = r.results();

var url = "https://data.gov.sg/api/action/datastore_search?resource_id=b7652e8c-2df9-401b-9123-994d63773316&limit=100";

var request = require('request');

var result;

request(url, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					var x = JSON.parse(body) // Print the body of response.
					result = x.result.records;
				}
				
			});

    
/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {
    title: 'Express',
    data: result,
  });
});

module.exports = router;