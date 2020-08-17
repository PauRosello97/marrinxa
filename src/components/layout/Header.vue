<template>
	<header>
		
		<b-navbar toggleable="lg" type="dark" variant="info" id="top-nav">
			<b-navbar-brand id="nav-titol" to="/">Marrinxa</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse" id="nav-button"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav id="nav-list" class="ml-auto">
					<b-link class="banderola" to="/acte/9">Santes</b-link>
					<b-link class="banderola" to="/marrinxa">L'associació</b-link>
					<b-link class="banderola" to="/grups">Artistes</b-link>
					<b-link class="banderola" to="/botiga">Botiga</b-link>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		
    </header>
</template>

<style scoped>
	*{
		
	}
	a{ 
		font-family: 'Lobster'; 
		font-size: 20px;
		color: white;
	}
	a:hover { text-decoration: none; }

	.banderola{
		width: auto;
		display: block;
		padding: 10px;
		text-align: center;
	}

	#nav-collapse{
		height: 100%;
	}

	#top-nav{
		width: 100%;
		padding: 0px;
		background-color: #e8e1ce !important;
		display: flex !important;
		justify-content: space-between;
	}

	#nav-button{
		border-color: #78664e;
		background:  #78664e;
		margin-right: 10px;
	}

	#nav-titol{
		padding: 10px;
		font-size: 30px;
		color:#78664e;
	}

	#menu-list{
		width: auto;
	}

	@media (min-width: 992px){
		.banderola:nth-child(4n+1){	color: #8ab42e;	}
		.banderola:nth-child(4n+2){	color: #168b9d;	}
		.banderola:nth-child(4n+3){	color: #ee8f0f;	}
		.banderola:nth-child(4n+4){	color: #78664e;	}
		#top-nav{
			padding: 0px 20px;
		}
	}
	
	@media (max-width: 991px){
		.banderola:nth-child(5n+1){	background: #8ab42e;	}
		.banderola:nth-child(5n+2){	background: #168b9d;	}
		.banderola:nth-child(5n+3){	background: #eacd00;	}
		.banderola:nth-child(5n+4){	background: #ee8f0f;	}
		.banderola:nth-child(5n+5){	background: #78664e;	}
	}


	
</style>

<script>
	export default({
		
	})
</script>