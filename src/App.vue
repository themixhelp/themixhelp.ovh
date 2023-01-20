<script setup>
	import { randomHighlightColor } from '@/utlis/randomHighlightColor.js'

	randomHighlightColor.chooseThemeColor()
</script>

<template>
	<section class="app-wrapper">
		<router-view></router-view>
	</section>
</template>

<style lang="scss" scoped></style>
