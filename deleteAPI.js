const dbConnect = require('./config/dbConnect');
const mongodb = require('mongodb');
const express = require('express');

const app = express();

app.delete('/:id', async (req, resp) => {
    console.log(req.params.id)
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)

    if (result.acknowledged)
    {
        console.log("Record Deleted Successfully");
    }
});

app.listen(5000);

