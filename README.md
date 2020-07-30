Visual Mockup: https://www.figma.com/file/qvrLTIKR5W5FDyj6mebkCy/Untitled?node-id=0%3A1

#WR3"s RAD NODB PROJECT!

MVP
Description: A todo list app that lets me keep track of stuff I need to do
Features:

User can add new todo item
User can view current todo items
user can delete todo items
user can edit title of todo item
user can complete todos
ICEBOX
Live chat dating feature
watch hulu on the site to procrastinate your todos
create next youtube/quibi/tiktok fusion that mines peoples personal information to sell on deep web
SERVER
Dependencies:
- express


Endpoints:

app.get("/api/todos")
app.post("/api/todos")
app.delete("/api/todos/:id")
app.put("/api/todos/complete/:id")
app.put("/api/todos/edit/:id")
Structure:

server/
index.js
controller.js
todos.json

CLIENT
Dependencies:

axios

Structure:
src/
- App.js
- App.css
- reset.css
- components/
    • Header.js
    • Form.js
    • List.js
    • Task.js


