const socket = io()


const text = document.querySelector("#message")
const botonM = document.querySelector("#send-message")


const allMessages = document.querySelector("#all-messages")

text.addEventListener("input", () => {
	const value = event.target.value
	if(value.length > 0) {
    botonM.disabled = false
	}
	else {
		botonM.disabled = true
	}
})

botonM.addEventListener("click", () => {

	const message = text.value
	
    socket.emit("text", {
    	message
    })

    text.value = ""

    botonM.disabled = true

})



socket.on("message", (data) => {

	const { message, socketId, user, time } = data

  const msg = document.createRange().createContextualFragment(`
    <div class="message">
          
          <div class="image-container">
            <img src="/images/images.jpeg">
          </div>

          <div class="message-body">
            
            <div class="user-info">
              <span class="username">${user}</span>
              <span class="time">${time}</span>
            </div>

            <p>${message}</p>
          </div>
        </div>
  `)

  allMessages.append(msg)
	
}) 

