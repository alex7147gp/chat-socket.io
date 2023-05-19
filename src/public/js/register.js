const login = document.querySelector("#login")
const pantalla = document.querySelector("#pantalla")


login.addEventListener("click", () => {

	const user = document.querySelector("#input-user").value

	const password = document.querySelector("#input-password").value

	if (user !== "" && password !== "") {
		document.cookie = `username=${user}`
		document.location.href = "/"
	}

	else {
		pantalla.style.zIndex = "4"
	}

})

const botonPantalla = document.querySelector("#botonPantalla")

botonPantalla.addEventListener("click", () => {
	pantalla.style.zIndex = "0"
})