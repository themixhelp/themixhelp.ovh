<script setup>
	import ReturnButton from '@/components/ReturnButton.vue'
</script>

<template>
	<section class="experience-wrapper">
		<h1>experience</h1>

		<article>
			<p>i mainly <strong>code</strong> in: html, css, js.</p>

			<p>i'm learning new <strong>technologies</strong> all the time, but I already know some: vue, vite, parcel, pug, scss, tailwind, axios, strapi.</p>

			<p>i only use good <strong>tools</strong> for programming: webstorm, vscode, postman, termius, figma.</p>
		</article>

		<article>
			<p>do you want to see my best <strong>projects</strong>? check out my pinned repositories on <a href="https://github.com/themixhelp">github</a>!</p>
		</article>

		<ReturnButton />
	</section>
</template>

<style lang="scss" scoped>
	@use '@/styles/sections.scss';
</style>
