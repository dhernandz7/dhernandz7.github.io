<template>
	<div class="row vh-100">
		<!--div class="col-md-12 portada text-center text-white pt-5" style="font-size: 2rem">
			Desarrollador Web
		</div-->
		<div class="col-md-4 bg-dark">
			<div class="text-center my-4">
				<img height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIIvMebaX69XxiSod3KwAyxOQvGpv0-FDJB8kFsDhK7TXrJm2Rw" alt="img" class="rounded-circle">
			</div>
			<p class="h5 text-white">Información personal</p>
			<div class="table-responsive">
				<table class="table text-warning">
					<tbody>
						<tr>
							<th scope="row"><i class="fas fa-user mr-2"></i>Nombre</th>
							<td>{{yo.nombre}}</td>
						</tr>
						<tr>
							<th scope="row"><i class="fas fa-map mr-2"></i>Nacionalidad</th>
							<td>{{yo.nacionalidad}}</td>
						</tr>
						<tr>
							<th scope="row"><i class="fas fa-language mr-2"></i>Lenguaje</th>
							<td>{{yo.lenguaje}}</td>
						</tr>
						<p class="h5 text-white mt-3">Contacto</p>
						<tr>
							<th scope="row"><i class="fas fa-mobile mr-2"></i>Celular</th>
							<td>{{yo.celular}}</td>
						</tr>
						<tr>
							<th scope="row"><i class="fas fa-envelope mr-2"></i>Correo</th>
							<td>{{yo.correo}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="h5 text-white border-bottom pb-2">Enlaces</p>
			<div class="btn-group mt-2 mb-3">
				<a class="btn btn-outline-warning" v-bind:href="yo.enlaces.github" target="_blank">
					<i class="fab fa-github mr-2"></i>
					Github
				</a>
				<a class="btn btn-outline-warning" v-bind:href="yo.enlaces.twitter" target="_blank">
					<i class="fab fa-twitter mr-2"></i>
					Twitter
				</a>
				<a class="btn btn-outline-warning" v-bind:href="yo.enlaces.facebook" target="_blank">
					<i class="fab fa-facebook mr-2"></i>
					Facebook
				</a>
			</div>
		</div>
		<div class="col-md-8 bg-white pt-3">
			<p class="h5 border-bottom p-2">Acerca de mí</p>
			<p class="text-justify">
				Desarrollador web...
			</p>
			<p class="h5 border-bottom p-2">Educación</p>
			<ul class="list-group my-3">
				<li class="list-group-item bg-info">
					<!--span class="font-weight-bold mr-2">2018</span-->
					Ingeniería en Sistemas
				</li>
			</ul>
			<p class="h5 border-bottom p-2">Conocimiento</p>
			<div class="row my-3">
				<div class="col mb-3" v-for="conocimiento of conocimientos">
					<label for=""><i v-bind:class="`${conocimiento.icono} mr-2`"></i>{{conocimiento.titulo}}</label>
					<div class="progress">
						<div v-bind:class="`progress-bar w-${conocimiento.porcentaje} text-center`" role="progressbar" v-bind:aria-valuenow="conocimiento.porcentaje" aria-valuemin="0" aria-valuemax="100" v-bind:style="`width: ${conocimiento.porcentaje}%`">{{conocimiento.porcentaje}}%</div>
					</div>
				</div>
			</div>
			<p class="h5 border-bottom p-2">Hobbies</p>
			<div class="row my-3">
				<div class="col mb-3" v-for="hobbie of hobbies">
					<i v-bind:class="`${hobbie.icono} mr-2`"></i>{{hobbie.titulo}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				yo: {
					nombre: 'Danilo Hernandez',
					nacionalidad: 'guatemalteco',
					lenguaje: 'Español',
					celular: '5581-3691',
					correo: 'dhernandez0032@gmail.com',
					enlaces: {
						github: 'https://github.com/dhernandz7',
						twitter: 'https://twitter.com/dhernandz7',
						facebook: 'https://facebook.com/dhernandz7',
					}
				},
				conocimientos: [
				{
					titulo: 'Laravel',
					porcentaje: 85,
					icono: 'fab fa-laravel'
				},
				
				{
					titulo: 'Database',
					porcentaje: 75,
					icono: 'fa fa-database'
				},
				{
					titulo: 'JavaScript',
					porcentaje: 80,
					icono: 'fab fa-js-square'
				},
				{
					titulo: 'Php',
					porcentaje: 75,
					icono: 'fab fa-php'
				}
				],
				hobbies: [
				{
					titulo: 'Fútbol',
					icono: 'fa fa-futbol'
				},
				{
					titulo: 'Aprender',
					icono: 'fas fa-chalkboard-teacher'
				}	
				]
			}
		}
	}
</script>