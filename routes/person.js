const express = require('express')

const personRouter = express.Router()

const Person = require('../Model/person')



// POST New Person
personRouter.post('/add', async (req, res) => {

    try {
        const newperson = new Person (req.body)
        const result= await newperson.save()
        res.send({ person:result, message: 'Person Added' })
        
    } catch (error) {
        console.log(error)
    }

}
)
// Get All Persons
// Fetches the latest posts
// personRouter.get("/latest", async (req, res) => {
//     let collection = await db.collection("posts");
//     let results = await collection.aggregate([
//       {"$project": {"author": 1, "title": 1, "tags": 1, "date": 1}},
//       {"$sort": {"date": -1}},
//       {"$limit": 3}
//     ]).toArray();
//     res.send(results).status(200);
//   });
// Get user by id
// Delete Person
// Update Person
module.exports = personRouter