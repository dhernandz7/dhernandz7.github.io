<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">Navbar</a>
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
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
		
	}
</script>
