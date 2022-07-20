const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");


const allNewsFeed = asyncHandler(async(req,res) => {
        const {content, feedId} = req.body;

        if(!content || !feedId){
            
        }

})