const btn = document.querySelector('button')
const screenWidth = document.documentElement.clientWidth
const screenHeight = document.documentElement.clientHeight

function Permission() {
	alert(`Размер вашего экрана: ${screenWidth} x ${screenHeight}`)
}

btn.addEventListener('click', Permission)