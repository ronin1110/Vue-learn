<template>
	<div>
	<h3>child</h3>
	<h5>{{msg}}</h5>
	<h6> {{childMsg}}</h6>
	<button @click="passMsg">button</button>
	</div>
</template>

<script>
	import bus from '../utils/bus'
	export default{
		props: {
			msg: {
				type: String,
				default: '111'
			},
		},
		data() {
			return {
				childMsg: 'child msg'
			}
		},
		methods: {
			passMsg() {
				this.$emit('showMsg','i am from child')
			}
		},
		mounted() {
			console.log('app传到child的数据',this.$attrs);
			bus.$on('msg',(val)=>{
				this.childMsg=val
			});
		
				
			
		}
	}
</script>

<style>
</style>
