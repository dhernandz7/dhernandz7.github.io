<template>
	<div class="container">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				appName: 'edh'
			}
		}
		
	}
</script>

<style>
	.router-link-exact-active{
		border-bottom: solid #42b983;
		border-radius: 0;
	}
	.router-link-active{
		border-bottom: solid #42b983;
		border-radius: 0;
	}
</style>