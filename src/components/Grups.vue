<template>
	<main class="container">
		<div id="div-h1">
			<h1>Artistes</h1>
		</div>

		<article>

			<section v-for="grup in myGrups" v-bind:key="grup.id">

				<router-link :to="'/grup/'+grup.id" class="nav-link">
				
					<div class="img_container">
						<img :src="'/dist/grups/'+grup.thumbnail">
					</div>
					<div class="info">
						<strong> {{ grup.nom }} </strong>
						<p>{{ grup.estil }}</p>
					</div>
				</router-link>

			</section>

		</article>

	</main>
</template>

<style scoped>

	.nav-link{
		padding: 0px;
	}

	article{
		margin-top: 20px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, minmax(100px, 1fr));
		grid-gap: 20px;
		padding: 0px;
	}

	@media (max-width: 1000px){
		article{ grid-template-columns: repeat(3, minmax(100px, 1fr)); }
	}

	@media (max-width: 700px){
		article{ grid-template-columns: repeat(2, minmax(100px, 1fr)); }
	}

	section{
		transition: 0.5s;
		overflow: hidden;
		z-index: 0;
		background: #e8e1ce;
		padding: 10px;

	}

	section:nth-child(5n+1) a{	color: #8ab42e;	}
	section:nth-child(5n+2) a{	color: #168b9d;	}
	section:nth-child(5n+3) a{	color: #78664e;	}
	section:nth-child(5n+4) a{	color: #ee8f0f;	}
	section:nth-child(5n+5) a{	color: #78664e;	}
	section:hover:nth-child(5n+1){ box-shadow: 0px 0px 20px #8ab42e; }
	section:hover:nth-child(5n+2){ box-shadow: 0px 0px 20px #168b9d; }
	section:hover:nth-child(5n+3){ box-shadow: 0px 0px 20px #eacd00; }
	section:hover:nth-child(5n+4){ box-shadow: 0px 0px 20px #ee8f0f; }
	section:hover:nth-child(5n+5){ box-shadow: 0px 0px 20px #78664e; }
	section:nth-child(7n+1){ transform: rotate(-2deg); }
	section:nth-child(7n+2){ transform: rotate(2deg); }
	section:nth-child(7n+3){ transform: rotate(1.5deg); }
	section:nth-child(7n+4){ transform: rotate(1deg); }
	section:nth-child(7n+5){ transform: rotate(-1deg); }
	section:nth-child(7n+6){ transform: rotate(1deg); }
	section:nth-child(7n+7){ transform: rotate(2deg); }

	section:hover{
		padding: 0px;
		transform: rotate(0deg);
	}

	section img{
		width:100%;
		max-height:100%;
		-webkit-transition: transform .25s;
		transition: transform .25s;
		z-index: 100;
	}

	section:hover img{
		transform: scale(1.2);
		z-index: 100;
	}

	h1{ margin-bottom: 10px; }

	.info{ padding: 10px; }

	a{
		color: black;
		text-decoration: none;
	}

	.llista-grups{
		margin-top: 3px;
		font-size: 13px;
	}

	.grup+.grup::before{
		content: " / ";
	}
	
</style>

<script>
	import grups from '../grups.json'

	export default {
        computed: {
		    myGrups() {
				return grups.grups.map((item) => {
					return item;
				})
		    },
		    grupsOrdenats() {
		    	function compare(a, b){
		    		if(a.nom<b.nom)
		    			return -1;
		    		if(a.nom>b-nom)
		    			return 1;
		    		return 0;
		    	}

		    	return this.arrays.sort(compare);
		    }
		}
	}
</script>