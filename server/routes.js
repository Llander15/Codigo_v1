const express = require("express");

// create an instance of our router
const router = express.Router();

const { getLeaderBoardCollection, getPlayerCollection } = require("./models/index");
const { ObjectId } = require("mongodb");

//Player DB Routes --------------------------------------------------------------------------

// GET /player
router.get("/player", async (req, res) => {
    const playerCollection = getPlayerCollection();
    const player = await playerCollection.find({}).toArray();

    res.status(200).json(player);
});

// SIGNUP
router.post("/signup", async (req, res) => {// still needs to check if email already exist
    const playerCollection = getPlayerCollection();
    const { username, email, password } = req.body; 
    acc = playerCollection.findOne({email: email});
    const newPlayer = await playerCollection.insertOne({ username, email, password });
    res.status(201).json({ username, email, password, _id: newPlayer.insertedId });
});

// LOGIN 


// DELETE /player
router.delete("/player/:id", async (req, res) => {
    const playerCollection = getPlayerCollection();
    const _id = new ObjectId(req.params.id);
  
    const deletedPlayer = await playerCollection.deleteOne({ _id });
    res.status(200).json(deletedPlayer);
});

// PUT /todos/:id
// router.put("/todos/:id", async (req, res) => {
//     const collection = getPlayerCollection();
//     const _id = new ObjectId(req.params.id);
//     const { username, email, password } = req.body;
  
//     const updatedTodo = await collection.updateOne({ _id }, { $set: { 
//         username: newUsername, 
//         email:newEmail, 
//         password:newPassword 
//     } });
//     res.status(200).json(updatedTodo);
// });




//Leader Board DB Routes ------------------------------------------------------------------------

// GET /leaderBoard
router.get("/leaderBoard", async (req, res) => {
    const leaderBoardCollection = getLeaderBoardCollection();
    const leaderBoard = await leaderBoardCollection.find({}).toArray();

    res.status(200).json(leaderBoard);
});

// POST /leaderBoard
router.post("/leaderBoard", async (req, res) => {
    const leaderBoardCollection = getLeaderBoardCollection();
    const { timer, stage, username } = req.body; 

    const newLeaderBoard = await leaderBoardCollection.insertOne({ timer, stage, username });
    res.status(201).json({ timer, stage, username, _id: newLeaderBoard.insertedId });
});

// DELETE /leaderBoard
router.delete("/leaderBoard/:id", async (req, res) => {
    const leaderBoardCollection = getLeaderBoardCollection();
    const _id = new ObjectId(req.params.id);
  
    const deletedLeaderBoard = await leaderBoardCollection.deleteOne({ _id });
    res.status(200).json(deletedLeaderBoard);
});

// PUT / /:id
// router.put("/todos/:id", (req, res) => {
//     res.status(200).json({ mssg: "PUT REQUEST TO /api/todos" });
// });

module.exports = router;