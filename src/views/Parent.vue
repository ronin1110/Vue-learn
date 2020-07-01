<template>
	<div>
		<h1> parent</h1>
		<h3> {{msg}}</h3>
		<h5 style="color: aquamarine;">vuex{{count}}</h5>
		<h5 style="color: teal;">vuex{{doubleCount}}</h5>
		<button @click="addcount">增加</button>
		<m-child msg="from Parent message" @showMsg="showMsg" v-bind="$attrs"></m-child>
	</div>
	
</template>

<script>
	import MChild from './Child.vue'
	
	export default {
		computed: {
			count() {
				return this.$store.state.count 
			},
			doubleCount()
			{
				return this.$store.getters.doubleCount
			}
		},
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
			},
			
			
			addcount()
			{
				this.$store.commit('add')
				// this.$store.dispatch('delayAdd')
			}
			
		},

	}
	
</script>

<style scoped>

</style>