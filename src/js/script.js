const navBtn = document.querySelector('.navbar__nav-btn')
const naviList = document.querySelector('.navbar__nav-list')
const navSpeciaLink = document.querySelector('.navbar__nav-link--first')
const spanYear = document.querySelector('.footer__copy-year')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const message = document.querySelector('#msg')
const sendBtn = document.querySelector('.contact__btn')
const popup = document.querySelector('.contact__popup')
const popupBtn = document.querySelector('.contact__popup-button')
const navLink = document.querySelectorAll('.navbar__nav-link')
const checkbox = document.querySelector('.contact__check-checkbox')
const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

showCookie()

const hideCookieAlert = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', hideCookieAlert)

const activeLink = window.location.href

navLink.forEach((link) => {
	if (link.href === activeLink) {
		link.classList.add('active')
	}
})

const activeMobileNav = () => {
	naviList.classList.toggle('active')
	navBtn.classList.toggle('second-active')
	document.body.classList.toggle('sticky-body')
}

const addCurrentYear = () => {
	const year = new Date().getFullYear()
	spanYear.innerText = year
}

addCurrentYear()

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

const vefiryCheck = () => {
	if (checkbox.checked === false) {
		showError(checkbox)
	} else {
		deleteError(checkbox)
	}
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

const verifyForm = (e) => {
	e.preventDefault()
	checkForm(inputs)
	verifyMail(email)
	vefiryCheck(checkbox)
}

if (document.location.search === '?mail_status=sent') {
	popup.classList.add('show-popup')
}

const closePopup = () => {
	popup.classList.remove('show-popup')
}

navBtn.addEventListener('click', activeMobileNav)
sendBtn.addEventListener('click', verifyForm)
popupBtn.addEventListener('click', closePopup)
