// With Express
var express = require('express')
var app = express()

app.use(express.json());

var to_dos = [];

app.get('/todo', (req, res) => {
    res.send(to_dos);
});

app.post('/todo', (req, res) => {
    to_dos.push(req.body.todo);
    res.send({todos: to_dos});
});

app.get('/todo/:todo', (req, res) => {
    if (to_dos.includes(req.params.todo)) {
        res.send(req.params.todo)
    }
    res.status(404).send({
        message: "Not found"
    });
});

app.put('/todo/:to_do', (req, res) => {
    if (to_dos.includes(req.params.to_do)) {
        index = to_dos.indexOf(req.params.to_do)
        to_dos.splice(index, 1, req.body.todo)
        res.send({todos: to_dos});
    }
    res.status(404).send({
        message: "Not found"
    });
});

app.delete('/todo/:to_do', (req, res) => {
    index = to_dos.indexOf(req.params.to_do);
    if (index > - 1) {
        to_dos.splice(index, 1)
    }
    res.send({todos: to_dos});
});

app.listen(2000, () => console.log("Listing to 2000"))

// Without express
// const http = require('http')

// http.createServer((req, res) => {
//     res.write("Hello World!");
//     res.end();
// }).listen(2001, () => console.log("Listing to 2001"))