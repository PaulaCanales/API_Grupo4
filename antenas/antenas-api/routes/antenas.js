var express = require('express');
var router = express.Router();
var cors = require('cors');
var mongoose = require('mongoose');
var pings= require('../models/Antenas_bd.js');

router.use(cors());
var allPing;
/* GET /antenas listing. */
router.get('/', function(req, res, next) {
  
  pings.find(function (err, todos) {
    if (err) return next(err);
    console.log(todos);
    allPing ? console.log(allPing) : null ;
    allPing = todos;
    res.json(todos);

  });
});

router.get('/stats', function(req, res, next) {
  pings.aggregate({ $group: { _id: "$torre", total: { $sum: 1 } } },{ $sort: { total: -1 } },function (err, todos) {
    if (err) return next(err);
    console.log(todos);
    res.json(todos);
  });  
});

/* GET /antenas/numa listing. */
router.get('/numa', function(req, res, next) {

  pings.find(0, {_id:0, numa:1} ,function (err, todos) {
    if (err) return next(err);
    console.log(todos);
    res.json(todos);
  });


});

/* GET /antenas/torres listing. */
router.get('/torres', function(req, res, next) {
  pings.find(0, {_id:0, "torre":1} ,function (err, todos) {
    if (err) return next(err);
    console.log(todos);
    res.json(todos);
  });
});

/* POST /antenas */
router.post('/', function(req, res, next) {
  pings.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /antenas/id */
router.get('/:id', function(req, res, next) {
  pings.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /antenas/id */
router.put('/:id', function(req, res, next) {
  pings.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
//Model.findByIdAndUpdate(id, [update], [options], [callback])


/* DELETE /antenas/:id */
router.delete('/:id', function(req, res, next) {
  pings.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
//Model.findByIdAndRemove(id, [options], [callback])


module.exports = router;