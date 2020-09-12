<template>
	<div class="home">
		<img
			alt="Vue logo"
			src="../assets/logo.png"
		>

		<!-- <hello-world msg="Welcome to Your Vue.js + TypeScript App" /> -->
		<hello-world
			msg="Welcome to Your Vue.js + TypeScript App"
			prop-two="boop"
		/>

		<div>
			data:
			{{ hello }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld,
	},
	data() {
		return {
			hello: 'world',
		};
	},
});
</script>
