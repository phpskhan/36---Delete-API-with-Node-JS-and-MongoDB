const express = require('express');
const dbConnect = require('./config/dbConnect');

const app = express();

app.use(express.json()); // Replaced for Body Parser after Express 4.6

app.post('/', async (req, resp) => {
    // console.log(req.body)
    let data = await dbConnect();
    let result = await data.insertOne(req.body)

    resp.send(result)

    if (result.acknowledged)
    {
        console.log("Record Inserted Successfully");
    }
});

app.listen(5000);
