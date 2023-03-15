const express = require('express');
const dbConnect = require('./config/dbConnect');

const app = express();

app.use(express.json()); // Replaced for Body Parser after Express 4.6

app.put('/:name', async (req, resp) => {
    let data = await dbConnect();
    let result = data.updateOne(
        {name: req.params.name},
        { $set:req.body }
    )
    resp.send({result:"Updated"})
});

app.listen(5000);