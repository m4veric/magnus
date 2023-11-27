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

addCurrentYear()

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.contact__error-text')
	formBox.classList.add('error')
}

const deleteError = (input, msg) => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = (input) => {
	input.forEach((inp) => {
		if (inp.value === '') {
			showError(inp, inp.placeholder)
		} else {
			deleteError(inp, inp.placeholder)
		}
	})
}

const verifyMail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		deleteError(email)
	} else {
		showError(email)
	}
}

if (document.location.search === '?mail_status=sent') {
	popup.classList.add('show-popup')
}

const closePopup = () => {
	popup.classList.remove('show-popup')
}

const verifyForm = (e) => {
	e.preventDefault()
	checkForm([inputName, inputEmail, message])
	verifyMail(email)
}

navBtn.addEventListener('click', activeMobileNav)
sendBtn.addEventListener('click', verifyForm)
popupBtn.addEventListener('click', closePopup)
