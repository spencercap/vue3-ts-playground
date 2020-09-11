<template>
	<div class="Garden">
		<h1>This is the Garden page</h1>

		<br />
		<br />
		local data val:
		{{ flowers }}

		<br />
		<br />
		rootVal:
		{{ rootVal }}

		<br />
		<br />
		rootObj:
		{{ rootObj }}

		<!-- <HelloWorld msg="nested comp test" /> -->
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
	name: "Garden",
	components: {
		// eslint-disable-next-line vue/no-unused-components
		HelloWorld,
		// HelloWorld: () => import("../components/HelloWorld.vue"), // dynamic imports dont work in components
	},
	data() {
		return {
			flowers: "fresh",
		};
	},
	mounted() {
		console.log("Garden mounted");

		// const aRootVal = this.$root?.rooter; // works but compile err
		// const aRootVal = this.$root?.$data.rooter; // also works but compile err
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const aRootVal = (this.$root?.$data as any).rooter;
		console.log("aRootVal:", aRootVal);

		// TODO try importing $root type
	},
	computed: {
		rootVal(): string {
			// return "obvi this works";
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return (this.$root?.$data as any).rooter;
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		rootObj(): any {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return (this.$root?.$data as any).rootObj;
		},
	},
	watch: {
		rootVal: {
			handler(newRootVal: string, oldRootVal: undefined | string) {
				console.log(
					"[T-LOG]: handler -> newRootVal:",
					newRootVal,
					"// oldRootVal:",
					oldRootVal
				);
			},
		},
	},
});
</script>
