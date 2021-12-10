const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello fuck my second node server');
})

const users = [

    { id: 0, name: 'shabana', email: 'shabana@gamil.com', phone: '033393333333' },
    { id: 1, name: 'shabnur', email: 'shabana@gamil.com', phone: '033393333333' },
    { id: 2, name: 'shonia', email: 'shabana@gamil.com', phone: '033393333333' },
    { id: 3, name: 'purnima', email: 'shabana@gamil.com', phone: '033393333333' },
    { id: 4, name: 'pakna', email: 'shabana@gamil.com', phone: '033393333333' },

]

// use query parameter
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {

        res.send(users)

    }
})

// app.METHOD
app.post('/users',(req , res)=>{
    console.log('hitting the post',req.body)
   
   const newUser =req.body;
   newUser.id=users.length;
   users.push(newUser);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'bangana'])
})
app.get('/fruits/mango/fazli', (req, res) => {
    res.send('yammmi yammi fazli')
})

app.listen(port, () => {
    console.log("listening to port ", port);
})