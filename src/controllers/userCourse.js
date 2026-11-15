const userCourses = require("../models/userCourses");

const userCourse = async(req,res)=>{
    try{
        const courses = await userCourses.find({user: req.user._id}).sort({createdAt: -1});

        if(!courses){
            return res.status(404).json({success: false, message: "Course Found on this Account"});
        }

        return res.status(200).json({success: true, courses});
    } catch(err){
        return res.status(500).json({success: false, message: err});
    }
}

module.exports = {userCourse}