<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/garden">Garden</router-link>
	</div>
	<router-view />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

// export default defineComponent({
const App = defineComponent({
	name: 'App',
	data() {
		return {
			rooter: 'some root data',
			rootObj: {
				one: 1,
				two: 2,
				three: {
					number: 3,
					roman: 'iii',
				},
			},
		};
	},
});
export default App;
</script>
