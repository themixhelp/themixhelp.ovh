const appearanceHandler = {
	ROOT_ELEMENT: document.querySelector('#app'),
	CSS_SELECTOR: 'darkmode',

	CURRENT_STATE: localStorage.getItem('darkmode') ? localStorage.getItem('darkmode') : '0',

	init() {
		if (this.CURRENT_STATE === '1') {
			this.ROOT_ELEMENT.classList.toggle(this.CSS_SELECTOR)
		}
	},

	toggleAppearance() {
		this.ROOT_ELEMENT.classList.toggle(this.CSS_SELECTOR)
		this.ROOT_ELEMENT.classList.add('darkmode-smooth')

		this.toggleState()
		this.saveState()
	},

	toggleState() {
		this.CURRENT_STATE === '0' ? (this.CURRENT_STATE = '1') : (this.CURRENT_STATE = '0')
	},
	saveState() {
		localStorage.setItem('darkmode', this.CURRENT_STATE)
	},
}

export { appearanceHandler }
