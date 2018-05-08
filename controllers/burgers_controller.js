// require modules
var express = require('express');
var router = express.Router();
var burger = require('../modules/burger.js');

router.get('/', function(request, response){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render('index', hbsObject);
    });
});

router.post('/api/burger', function(request, response){
    burger.insertOne(['burger_name'], [request.body.burger_name],
    function(result){
        response.json({id: result.id});
    });
});

module.eports = router;
