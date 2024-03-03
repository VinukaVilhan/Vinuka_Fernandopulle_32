import mongoose from "mongoose";

const schema = new mongoose.Schema({
     ingredients: { type:String, required:true},

     instructions: {type: String, required:true},

     hours:Number, minutes:Number });



export const Recipe = mongoose.model('Recipe', schema);



