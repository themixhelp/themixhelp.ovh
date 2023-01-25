import { ref } from 'vue'

const appearanceHandler = {
	ROOT_ELEMENT: document.querySelector('#app'),
	CSS_SELECTOR: 'darkmode',

	CURRENT_STATE: ref(localStorage.getItem('darkmode') ? localStorage.getItem('darkmode') : '0'),

	init() {
		if (this.CURRENT_STATE.value === '1') {
			this.ROOT_ELEMENT.classList.toggle(this.CSS_SELECTOR)
		}
	},

	toggleAppearance() {
		this.ROOT_ELEMENT.classList.toggle(this.CSS_SELECTOR)
		this.ROOT_ELEMENT.classList.add('smooth')

		this.toggleState()
		this.saveState()
	},

	getState() {
		return this.CURRENT_STATE.value
	},
	toggleState() {
		this.CURRENT_STATE.value === '0' ? (this.CURRENT_STATE.value = '1') : (this.CURRENT_STATE.value = '0')
	},
	saveState() {
		localStorage.setItem('darkmode', this.CURRENT_STATE.value)
	},
}

export { appearanceHandler }
