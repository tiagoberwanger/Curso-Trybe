const app = require('express')()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const users = [];

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`)
  
  socket.on('user', (user) => {
    users.push(user);
    io.emit('users', users)
  })

  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`)
  })
});

http.listen(port, () => console.log(`listening on ${port}`));
