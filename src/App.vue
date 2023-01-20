<script setup></script>

<template>
	<section class="app-wrapper">
		<h1>
            themixhelp<span class="highlight">.</span>
        </h1>
	</section>
</template>

<style lang="scss" scoped>
    @use '@/styles/variables.scss' as *;

	.app-wrapper {
		width: 100vw;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;

        h1 {
            font-size: clamp(2rem, 10vw, 5rem);
            font-weight: 700;

            text-align: center;
        }
	}
</style>
