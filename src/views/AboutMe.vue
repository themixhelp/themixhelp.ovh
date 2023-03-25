<script setup>
	import ReturnButton from '@/components/ReturnButton.vue'
</script>

<template>
	<section class="about-me-wrapper">
		<h1>about-me</h1>

		<article>
			<p>hey! i am Mikołaj, but you probably know me as <strong>themixhelp</strong>.</p>
			<p>
				i am generally interested in computer science, but i mainly work in <strong>webdev</strong>! i am also supporting <strong>open-source</strong> projects so most of my codes are available on
				<a href="https://github.com/themixhelp">github</a>.
			</p>
		</article>

		<article>
			<p>i love cycling and skiing in my free time.</p>
			<p>
				<s>additionally, i am Apple fanboy</s>.
			</p>
		</article>

		<article>
			<p>do you want to contact me? write to <strong>themixhelp@outlook.com</strong>.</p>
			<p>prefer another way? you can do it via discord: <strong>themixhelp#3576</strong>!</p>
		</article>

		<ReturnButton />
	</section>
</template>

<style lang="scss" scoped>
	@use '@/styles/sections.scss';
</style>
