<script setup>
	import Navbar from '@/components/Navbar.vue'
	import AppearanceSwitcher from '@/components/AppearanceSwitcher.vue'

	import { randomHighlightColor } from '@/utlis/randomHighlightColor.js'

	const THEME_COLOR = randomHighlightColor.getThemeColor()
</script>

<template>
	<section class="home-wrapper">
		<h1>themixhelp<span class="highlight">.</span></h1>
        <h2><span class="highlight">{</span> frontend developer <span class="highlight">}</span></h2>

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

        h2 {
            padding-bottom: 1.5em;

            font-family: 'Ubuntu Mono', monospace;
            font-size: 0.75em;
            font-weight: 400;

            text-align: center;
        }

		.highlight {
			color: v-bind(THEME_COLOR);

            font-weight: 700;
		}
	}
</style>
