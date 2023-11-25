const navBtn = document.querySelector('.navbar__nav-btn')
const naviList = document.querySelector('.navbar__nav-list')
const spanYear = document.querySelector('.footer__copy-year')

const activeMobileNav = () => {
	naviList.classList.toggle('active')
	navBtn.classList.toggle('second-active')
}

const addCurrentYear = () => {
	const year = new Date().getFullYear()
	spanYear.innerText = year
}
addCurrentYear()
navBtn.addEventListener('click', activeMobileNav)
