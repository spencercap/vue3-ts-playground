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

		<br />
		<br />
		three3:
		{{ three3 }}

		<!-- <HelloWorld msg="nested comp test" /> -->
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// components
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

// types
import { RootData, SampleRootObject } from "@/typings/types.ts";

export default defineComponent({
	// const Garden = defineComponent({
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

		const num = this.rootObj.one;
		console.log(num);
		// type checking works! -- warns about settings type number to type string
		// this.rootObj.one = 'one';
	},
	computed: {
		rootVal(): string {
			// return "obvi this works";
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			// return (this.$root?.$data as any).rooter;
			return (this.$root?.$data as RootData).rooter;
		},
		// another option
		// rootVal(): string | undefined {
		// 	// return "obvi this works";
		// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
		// 	// return (this.$root?.$data as any).rooter;
		// 	return (this.$root?.$data as undefined | RootData)?.rooter;
		// },

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		rootObj(): SampleRootObject {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			// return (this.$root?.$data as any).rootObj as SampleRootObject;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return (this.$root as any).rootObj;
			// return this.$root?.$data?.rootObj; // how to get type correctly?
		},

		three3(): string | undefined {
			// return (this.$root as any).rootObj.three.roman; // $root.val works OR $root.$data.val
			// return (this.$root as any).rootObj3?.three?.roman || "nope"; // testing nonexistant $root data grab, gets undefined
			// return (this.$root as any).rootObj3?.three?.roman;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return (this.$root as any).rootObj?.three?.roman;
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

// export default Garden;
</script>
