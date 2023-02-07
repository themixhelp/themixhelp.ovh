<script setup>
	import Navbar from '@/components/Navbar.vue'
	import AppearanceSwitcher from '@/components/AppearanceSwitcher.vue'

	import { randomHighlightColor } from '@/utlis/randomHighlightColor.js'

	const THEME_COLOR = randomHighlightColor.getThemeColor()
</script>

<template>
	<section class="home-wrapper">
		<h1>themixhelp<span class="highlight">.</span></h1>

		<Navbar />
		<AppearanceSwitcher />
	</section>
</template>

<style lang="scss" scoped>
	@use '@/styles/variables.scss' as *;

	.home-wrapper {
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			padding-bottom: 0.25em;

			font-size: 2.5em;
			font-weight: 700;

			text-align: center;
		}

		.highlight {
			color: v-bind(THEME_COLOR);
		}
	}
</style>
