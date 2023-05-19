const express = require("express")
const { createServer } = require("http")

const path = require("path")
const realtimeServer = require("./realtimeServer")

const cookieParser = require("cookie-parser")

const config = require("../config/config")

const router = require("./routes")

const app = express()

const httpServer = createServer(app)


app.set("port", config.port || 3000)

app.set("views", path.join(__dirname, "views"))

app.use(cookieParser())

app.use(router)

app.use( express.static( path.join(__dirname, "public")))

httpServer.listen(app.get("port"), () => {
	console.log(`server running in port ${app.get("port")}`)
})

realtimeServer(httpServer)