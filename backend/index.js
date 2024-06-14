const express = require('express');
const cors = require('cors');
const {createTodo, updateTodo} = require("./types");

const app = express();
const {todo} = require('./db');

app.use(express.json());
app.use(cors());

app.post('/todo', async(req, res)=>{
    const createPayload = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayload);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description : createPayload.description,
        completed: false,
    })
    res.json({
        msg: "Todo created"
    })
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});

    res.json(todos)
})

app.put('/completed', async function(req, res){
    const updatePayLoad = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },
    {
        completed: true
    })
    res.json({
        msg: "Todo updated"
    })
})



app.listen(3000, () => {
    console.log("Server started on port 3000");
})