const btn = document.querySelector('button')
const resultImg = document.querySelector('.svg_img')
const icon = ["../img/arrow-down-left-circle.svg", "../img/arrow-down-left-circle-fill.svg"]
let i = 0

function NewIcon() {
	if (i == 1) {
		i--
	} else {
		i++
	}
	console.log(i)
	resultImg.src = icon[i]
}

btn.addEventListener('click', NewIcon)
