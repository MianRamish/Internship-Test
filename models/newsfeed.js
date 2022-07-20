const mongoose = require("mongoose");

const newsFeed = mongoose.Schema(
    {
        pic: {type:String, required:true},
        likes: {type:Boolean},
        comments:{type:String}
        
    },{
        timestamps:true
    }
)

const Feeds = mongoose.model("newsfeed", newsFeed);

module.exports=Feeds;