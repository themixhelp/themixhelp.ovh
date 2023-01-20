<script setup></script>

<template>
	<section class="navbar-wrapper">
		<router-link class="navbar-item" to="/about-me">about-me</router-link>
		<router-link class="navbar-item" to="/contact">contact</router-link>
	</section>
</template>

<style lang="scss" scoped>
	.navbar-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;

		.navbar-item {
			margin: 0 0.5em;
		}
	}
</style>
