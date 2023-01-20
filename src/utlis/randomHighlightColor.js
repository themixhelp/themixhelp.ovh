import { randomArrayItem } from '@/utlis/randomArrayItem.js'

const randomHighlightColor = {
	COLORS: ['#ffc65c', '#50b97e', '#39a6f9'],
	THEME_COLOR: null,

	chooseThemeColor() {
		this.THEME_COLOR = randomArrayItem(this.COLORS)
	},

	getThemeColor() {
		return this.THEME_COLOR
	},
}

export { randomHighlightColor }
