const navBtn = document.querySelector('.navbar__nav-btn')
const naviList = document.querySelector('.navbar__nav-list')
const naviListItems = document.querySelectorAll('.navbar__nav-list-item')
const spanYear = document.querySelector('.footer__copy-year')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const message = document.querySelector('#msg')
const sendBtn = document.querySelector('.contact__btn')
const popup = document.querySelector('.contact__popup')
const popupBtn = document.querySelector('.contact__popup-button')
const navLink = document.querySelectorAll('.navbar__nav-link')

const activeLink = window.location.pathname

navLink.forEach((link) => {
	if (link.href.includes(`${activeLink}`)) {
		link.classList.add('active')
	}
})

const activeMobileNav = () => {
	naviList.classList.toggle('active')
	navBtn.classList.toggle('second-active')
}

const addCurrentYear = () => {
	const year = new Date().getFullYear()
	spanYear.innerText = year
}

const showError = (input) => {
	const formBox = input.parentElement
	formBox.classList.add('error')
}

const deleteError = (input) => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const inputs = [inputName, inputEmail, message]

const checkForm = () => {
	inputs.forEach((inp) => {
		if (inp.value === '') {
			showError(inp)
		} else {
			deleteError(inp)
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
	checkForm(inputs)
	verifyMail(email)
}

addCurrentYear()

navBtn.addEventListener('click', activeMobileNav)
sendBtn.addEventListener('click', verifyForm)
popupBtn.addEventListener('click', closePopup)
