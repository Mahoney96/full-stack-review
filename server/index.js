const express = required('express')
const ctrl = require('./controller')

const app = expres();

app.use(express.json())

app.get("/api/todos", ctrl.getTodos)

app.get("/api/todos")
app.post("/api/todos")
app.delete("/api/todos/:id")
app.put("/api/todos/complete/:id")
app.put("/api/todos/edit/:id")

const port = 3992

app.listen(port, () => console.log(`Server listening on port, Merry Xmas ya filthy Animal`${port}))