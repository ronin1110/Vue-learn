<template>
	<div>
		<h1> parent</h1>
		<h3> {{msg}}</h3>
		<m-child msg="from Parent message" @showMsg="showMsg" v-bind="$attrs"></m-child>
	</div>
	
</template>

<script>
	import MChild from './Child.vue'
	
	export default {
		data() {
			return {
				msg: ''
			}
		},
		
		components: {
			MChild
		},
		methods: {
			showMsg(val) {
				this.msg= val
			}
		},

	}
	
</script>

<style scoped>

</style>