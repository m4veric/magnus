const navBtn = document.querySelector('.navbar__nav-btn')
const naviList = document.querySelector('.navbar__nav-list')
const spanYear = document.querySelector('.footer__copy-year')
const inputName = document.querySelector('#name')
const inputSurname = document.querySelector('#surname')
const inputEmail = document.querySelector('#email')
const message = document.querySelector('#msg')
const sendBtn = document.querySelector('.contact__btn')
const popup = document.querySelector('.contact__popup')
const popupBtn = document.querySelector('.contact__popup-button')

const activeMobileNav = () => {
	naviList.classList.toggle('active')
	navBtn.classList.toggle('second-active')
}

const addCurrentYear = () => {
	const year = new Date().getFullYear()
	spanYear.innerText = year
}

// const checkForm = (input) => {
// 	console.log(input)

// 	if (input.value === '') {
// 		console.log('bład')
// 	}
// }

// sendBtn.addEventListener('click', (el) => {
// 	el.preventDefault()

// 	checkForm([inputName, inputSurname, inputEmail, message])
// })

addCurrentYear()
navBtn.addEventListener('click', activeMobileNav)
