module.exports = (httpServer) => {
	const { Server } = require("socket.io")

	const io = new Server(httpServer)

	io.on("connection", (socket) => {

      const cookie = socket.handshake.headers.cookie
      const user = cookie.split("=").pop()

      socket.on("text", (data) => {


      socketId = socket.id

      const time = Date()
  	  io.emit("message", {
  	  	...data,
        user,
        socketId,
        time
  	  })
    })

  })
}