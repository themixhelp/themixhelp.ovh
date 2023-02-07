<script setup>
	import { randomHighlightColor } from '@/utlis/randomHighlightColor.js'

	const THEME_COLOR = randomHighlightColor.getThemeColor()
</script>

<template>
	<section class="navbar-wrapper">
		<router-link class="navbar-item" to="/about-me">about-me</router-link>
		<router-link class="navbar-item" to="/experience">experience</router-link>
	</section>
</template>

<style lang="scss" scoped>
	.navbar-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 1.1em;

		.navbar-item {
			position: relative;

			margin: 0 0.5em;
			padding-bottom: 0.25em;

			cursor: pointer;
		}

		.navbar-item::after {
			content: '';

			display: block;

			width: 100%;
			height: 0.25em;

			position: absolute;
			bottom: 0;

			background: v-bind(THEME_COLOR);
			border-radius: 0.25em;

			transform: scaleX(0);
			transform-origin: right;
			transition: transform 300ms;
		}

		.navbar-item:hover::after {
			transform: scaleX(1);
			transform-origin: left;
		}
	}
</style>
