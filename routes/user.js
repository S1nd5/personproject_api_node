const express = require("express")
const router = express.Router()
const {getUsers, getUser, addUser, removeUser} = require("../controllers/userController");

/* General Operations */

router.get("/users", async(req,res) => {
    let users = await getUsers();
    if ( users ) {
        res.status(200).json(users);
    } else {
        res.status(500).json({status: "Failed to retrieve userdata"});
    }
})

router.post("/user", async(req,res) => {
    if (!req.body) return res.status(400).json({status: "Invalid request body"});
    let userAdded = await addUser(req.body);
    if ( userAdded ) {
        res.status(200).json({status: "User added successfully."});
    } else {
        res.status(500).json({status: "Registration failed"});
    }
})

/* User ID specific operations */

router.get("/user/:id", async(req,res) => {
    let uid = req.params.id;
    if (!uid) return res.status(400).json({status: "No user id given"});
    let user = await getUser(uid);
    if ( user ) {
        res.status(200).json(user);
    } else {
        res.status(500).json({status: "User not found"});
    }
 })

/* TBD */

router.put("/user/:id", async(req,res) => {
    res.status(500).json({status: "Not implemented"});
})

router.delete("/user/:id", async(req,res) => {
    let uid = req.params.id;
    if (!uid) return res.status(400).json({status: "No user id given"});
    let userDeleted = await removeUser(uid);
    if ( userDeleted ) {
        res.status(200).json({status: "User removed successfully."});
    } else {
        res.status(500).json({status: "Deletion failed"});
    }
})

module.exports = router;