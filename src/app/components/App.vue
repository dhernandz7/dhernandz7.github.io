<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container">
				<a class="navbar-brand" href="#">{{appName}}</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<router-link :to="{name: 'index'}" class="nav-link">Inicio</router-link>
						</li>
						<li class="nav-item">
							<router-link :to="{name: 'servicios'}" class="nav-link">Servicios</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container">
			<router-view></router-view>
		</div>
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