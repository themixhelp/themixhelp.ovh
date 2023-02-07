<script setup></script>

<template>
	<section class="return-button-wrapper">
		<router-link to="/">return</router-link>
	</section>
</template>

<style lang="scss" scoped>
	.return-button-wrapper {
		position: absolute;
		right: 0;
		bottom: 0;

		padding: 1.25em 1.75em;

		opacity: 0.7;

		transition: opacity 300ms;

		cursor: pointer;

		&:hover {
			opacity: 1;
		}
	}
</style>
