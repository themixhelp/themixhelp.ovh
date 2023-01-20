<script setup>
	import Navbar from '@/components/Navbar.vue'
	import { randomHighlightColor } from '@/utlis/randomHighlightColor.js'

	randomHighlightColor.chooseThemeColor()

	const THEME_COLOR = randomHighlightColor.getThemeColor()
</script>

<template>
	<section class="app-wrapper">
		<h1>themixhelp<span class="highlight">.</span></h1>

        <Navbar />
	</section>
</template>

<style lang="scss" scoped>
	@use '@/styles/variables.scss' as *;

	.app-wrapper {
		width: 100vw;
		height: 100vh;

		display: flex;
        flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
            padding-bottom: .25em;

			font-size: clamp(2rem, 10vw, 5rem);
			font-weight: 700;

			text-align: center;
		}

		.highlight {
			color: v-bind(THEME_COLOR);
		}
	}
</style>
