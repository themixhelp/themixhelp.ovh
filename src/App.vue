<script setup>
	import { randomHighlightColor } from '@/utlis/randomHighlightColor.js'
	import { appearanceHandler } from '@/handlers/appearanceHandler.js'

	randomHighlightColor.chooseThemeColor()
	appearanceHandler.init()
</script>

<template>
	<section class="app-wrapper">
		<router-view></router-view>
	</section>
</template>

<style lang="scss" scoped></style>
