const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Video = require('../models/video')

const db = "mongodb://localhost:27017/videosdb"
mongoose.Promise = global.Promise
mongoose.connect(db, { useNewUrlParser: true,  useUnifiedTopology: true },function(err){
    if(err){
        console.error("Error:!"+err)
    }
    else{
        console.log("Connected to Mongodb")
    }
})


router.get('/videos', function(req, res){
    console.log("Get Request for all videos");

    Video.find({})
         .exec(function(err, videos){
             if(err){
                 console.log("Error retrieving videos");
             }
             else{
                 res.json(videos);
             }
         });
});


router.get('/videos/:id', function(req, res){
    console.log("Get Request for a videos");

    Video.findById(req.params.id)
         .exec(function(err, videos){
             if(err){
                 console.log("Error retrieving videos");
             }
             else{
                 res.json(videos);
             }
         });
});


router.post('/video', function(req, res){
    console.log("Post a videos");

    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log("Error Saving videos");
        }
        else{
            res.json(insertedVideo);
        }
    })
   
});


router.put('/video/:id', function(req, res){
    console.log("Updating a videos");

    Video.findByIdAndUpdate(req.params.id,
        
        {
            $set:{title:req.body.title, url:req.body.url, description:req.body.description}
        },
        {
            new:true
        },
        function(err, updatedVideo){
            if(err){
                res.send("Error Updating a Video");
            }
            else{
                res.json(updatedVideo);
            }
        }
        
        )
});


router.delete('/video/:id', function(req, res){
    console.log("Deleting a videos");

    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        
        if(err){
            res.send("Error deleting a Video");
        }
        else{
            res.json(deletedVideo);
        }
    }
    )
});



router.get('/', function(req,res){
    res.send("api works");
});

module.exports = router;