const Contact = require("../models/contact");

const createContact = async(req,res)=>{
    try{
        const {email, message} = req.body;

        if(!email || !message){
            return res.status(401).json({success: false, message: "Please fill all fields"});
        }

        const newContact = await Contact.create({
            user:req.user._id,
            email,
            message
        });
        await newContact.save();
        return res.status(200).json({success:true, message: "Message sent Successfully"});
    } catch(err){
        return res.status(500).json({success: false, message: err});
    }
}

module.exports = {createContact}