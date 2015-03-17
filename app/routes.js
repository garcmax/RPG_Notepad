var SimpleNote = require('./models/note');
var PostIt = require('./models/postIt')
var path = require('path');

module.exports = function(app, express) {
    // ROUTES FOR OUR API
    // =============================================================================
    var router = express.Router();              // get an instance of the express Router

    /*router.use(function(req, res, next) {
        // do logging
        console.log("req = ");
        console.log(req.body);
        next(); // make sure we go to the next routes and don't stop here
    });*/

    // frontend routes =========================================================
    // route to handle all angular requests
    router.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public',  'views/index.html'));
    });

    //test our api
    router.get('/api/test', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });
    });

    router.route('/api/postIt')
    .post(function (req, res) {
        var postIt = new PostIt();
        postIt.note = req.body.note;

        postIt.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({message : 'postIt Created'});
        });
    })
    .get(function (req, res) {
        PostIt.find(function(err, postIts) {
            if (err)
                res.send(err)
            res.json(postIts);
        });
    });
    router.route('/api/postIt/:id')
    .get(function(req, res) {
        PostIt.findById(req.params.id, function(err, postIt) {
            if (err)
                res.send(err);
            res.json(postIt);
        });
    })
    .delete(function(req, res) {
        PostIt.remove({
            _id: req.params.id
            }, function(err, postIt) {
                if (err)
                    res.send(err)
                res.json({message : 'postIt deleted successfully'})
            });
    });

    router.route('/api/simpleNote')
    .post(function (req, res) {
        var simpleNote = new SimpleNote();
        simpleNote.note = req.body.note;

        simpleNote.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({message : 'simple note created'});
        });
    })
    .get(function (req, res) {
        SimpleNote.find(function(err, simpleNotes) {
            if (err)
                res.send(err)
            res.json(simpleNotes);
        });
    });

    router.route('/api/simpleNote/:id')
    .get(function(req, res) {
        SimpleNote.findById(req.params.id, function(err, simpleNote) {
            if (err)
                res.send(err);
            res.json(simpleNote);
        });
    })
    .put(function (req, res) {
        SimpleNote.findById(req.params.id, function(err, simpleNote) {
            if (err)
                res.send(err);
            simpleNote.note = req.body.note;
            simpleNote.save(function(err) {
                if (err)
                    res.send(err);
                res.json({message : 'simple note updated'});
            });
        });
    })
    .delete(function(req, res) {
        SimpleNote.remove({
            _id: req.params.id
            }, function(err, simpleNote) {
                if (err)
                    res.send(err)
                res.json({message : 'simpleNote deleted successfully'})
            });
    });


    // more routes for our API will happen here

    // REGISTER OUR ROUTES -------------------------------
    app.use('/', router);
}
