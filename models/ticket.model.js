const mongoose = require("mongoose")


const ticketSchema = new mongoose.Schema({
    title : {type : String, required : true},
    category : {type : String, required : true},
    message : {type : String, required : true},
    date : {type : String, required : true},
    userId : {type : String, required : true}
})

const TicketModel = mongoose.model("ticket", ticketSchema)

const bookmarkSchema = new mongoose.Schema({
    title : {type : String, required : true},
    category : {type : String, required : true},
    message : {type : String, required : true},
    date : {type : String, required : true},
    userId : {type : String, required : true}
})

const BookmarkModel = mongoose.model("bookmark", bookmarkSchema)

const questionSchema = new mongoose.Schema({
    title : {type : String, required : true},
    category : {type : String, required : true},
    difficulty : {type : String, required : true},
    answer : {type : String, required : true},
    option1 : {type : String, required : true},
    option2 : {type : String, required : true},
    option3 : {type : String, required : true},
    // userId : {type : String, required : true}
})

const QuestionModel = mongoose.model("question", questionSchema)

module.exports = {
    TicketModel,BookmarkModel,QuestionModel
}
