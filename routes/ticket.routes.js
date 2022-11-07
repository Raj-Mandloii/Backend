const { Router } = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const cors = require("cors")

const { TicketModel,BookmarkModel,QuestionModel } = require("../models/ticket.model")
const { UserModel } = require("../models/User.model")

const ticketController = Router();

ticketController.use(cors())

ticketController.get("/", async (req, res) => {  
    console.log(req.query)
    const tickets = await QuestionModel.find(req.query).limit(req.query.limit).skip(req.query.skip) //User.find(req.query)
    console.log(tickets);
    res.send(tickets)
})

// ticketController.get("/bookmark", async (req, res) => {

//     const book = await BookmarkModel.find({ userId: req.body.userId, })
//     console.log(book);
//     res.send(book)
// })



ticketController.post("/create", async (req, res) => {

    const newQuestion = new QuestionModel(req.body)
    console.log(newQuestion)
    try {
        await newQuestion.save()
        res.send("New Question created")
    }
    catch (err) {
        res.send("something went wrong")
    }
})


ticketController.post("/bookmark", async (req, res) => {

    const book = new BookmarkModel(req.body)
    console.log(book)
    try {
        await book.save()
        res.send("Bookmarked created")
    }
    catch (err) {
        res.send("something went wrong")
    }
})





module.exports = {
    ticketController
}