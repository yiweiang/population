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

var id;

router.get('/:id', function (req, res, next) {
  id = req.params.id;
  var yearResult = result.filter(getResultYear);
  console.log(yearResult);
  if (yearResult.length > 0) {
    res.render('dataid', {
      title: 'Express',
      data: result.filter(getResultYear)[0],
    });
  }
  else {
    res.render('noresults');
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {

  console.log(result);

  res.render('data', {
    title: 'Express',
    data: result,
  });
});

function getResultYear(value) {
  if (value.year == id) {
    return value;
  }
  else {
    return null;
  }
}

module.exports = router;