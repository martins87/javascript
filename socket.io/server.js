const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
    console.log('New connection:', socket.id)

    socket.on('msg', function(msg) {
        console.log(msg)

        // broadcast message
        socket.broadcast.emit('msg', socket.id + ': ' + msg)
    })

    socket.on('disconnect', function() {
        console.log(socket.id + ' disconnected')
    })
})

const port = process.env.PORT || 3000

http.listen(port, function() {
    console.log(`Server listening on port ${port}`)
})
