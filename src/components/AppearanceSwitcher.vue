<script setup>
	import { computed } from 'vue'
	import { appearanceHandler } from '@/handlers/appearanceHandler.js'

	const THEME = computed(() => {
		return appearanceHandler.getState() === '0' ? 'darkmode' : 'lightmode'
	})
</script>

<template>
	<section class="appearance-switcher-wrapper">
		<span @click="appearanceHandler.toggleAppearance()" class="switcher" :class="THEME"></span>
	</section>
</template>

<style lang="scss" scoped>
	@use '@/styles/variables.scss' as *;
	@use '@/styles/utils.scss';

	.appearance-switcher-wrapper {
		.switcher {
			width: 2.5rem;
			height: 2.5rem;

			position: absolute;
			bottom: 0;
			right: 0;

			margin: 2em;

			opacity: 0.7;
			border-radius: 3rem;

			transition: color 300ms, background 300ms, opacity 300ms;

			cursor: pointer;

			&:hover {
				opacity: 1;
			}
		}
	}
</style>
