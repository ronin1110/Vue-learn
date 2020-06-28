<template>
	<div id="app">
		this is app
<!-- 		<button @click="passMsg">传数据</button>
		<m-parent :msga="a" :msgb="b" :msgc="c"></m-parent> -->
		<!-- <router-link to="/home">home</router-link> -->
		<button @click="toHome">home</button>
		
		
		<router-view></router-view>
	</div>
</template>

<script>
	import bus from './utils/bus.js'
	import MParent from './views/Parent.vue'
	export default {
		components: {
			MParent,
			
		},
		data() {
			return {
				a: 'a',
				b: 'b',
				c: 'c'
			}
		},
		methods: {
			passMsg() {
				bus.$emit('msg','i am from app')
			},
			toHome(){
				// this.$router.push({path:'/home',query:{name:'yaolin'} })
				this.$router.push({name:'home',params:{id:'3'} })
			}
			
		},
	}
</script>

<style scoped>

</style>