<template>
	<main class="container">
		<div id="div-h1">
			<h1>Agenda</h1>
		</div>

		<article>

			<section v-for="acte in actes" :key="acte.id">

				<router-link :to="'/acte/'+acte.id" class="nav-link">
				
					<div class="img_container">
						<img :src="'/dist/'+acte.thumbnail">
					</div>
					<div class="info">
						<p><i :class="acte.icon"></i> <strong> {{ acte.titol }} </strong></p>
						<p> {{ acte.dia }} a les {{ acte.hora }} </p>
						<p> {{ acte.lloc }} </p>
						<p class="llista-grups">
							<span class="grup" v-for="grup in acte.grups" :key="grup.id">
								<router-link :to="'/grup/'+findGrup(grup).id" class="nav-link">
									{{findGrup(grup).nom }}
								</router-link>
							</span>
						</p>
					</div>
				
				</router-link>

			</section>

		</article>

	</main>
</template>

<style scoped>

	.img_container, .info, p{
		padding: 0px;
		margin: 0px;
	}

	article{
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, minmax(100px, 1fr));
		grid-gap: 20px;
  		margin-top: 20px;
	}

	@media (max-width: 1000px){
		article{ grid-template-columns: repeat(3, minmax(100px, 1fr)); }
	}

	@media (max-width: 700px){
		article{ grid-template-columns: repeat(2, minmax(100px, 1fr)); }
	}

	section{
		transition: 0.75s;
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
	section:nth-child(7n+1){	transform: rotate(-2deg);	}
	section:nth-child(7n+2){	transform: rotate(2deg);	}
	section:nth-child(7n+3){	transform: rotate(1.5deg);	}
	section:nth-child(7n+4){	transform: rotate(1deg);	}
	section:nth-child(7n+5){	transform: rotate(-1deg);	}
	section:nth-child(7n+6){	transform: rotate(1deg);	}
	section:nth-child(7n+7){	transform: rotate(2deg);	}

	section img{
		width:100%;
		max-height:100%;
		-webkit-transition: transform .75s;
		transition: transform .75s;
		z-index: 100;
	}

	section:hover{
		transform: rotate(0deg);
		padding: 0px;
	}

	section:hover .info{
		padding: 15px 10px 10px 10px;
	}

	section:hover img{
		transform: scale(1.2);
		z-index: 100;
	}

	h1{ margin-bottom: 10px; }

	.info{
		padding-top: 15px;
		transition: .75s;
	}

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

	.llista-grups>span:hover{
		font-weight: bold;
	}

	.nav-link{
		display: inline;
		padding: 0px;
	}
</style>

<script>

	import agenda from '../agenda.json'
	import grups from '../grups.json'

	export default {
        computed: {
		    actes() {
				return agenda.actes.map((item) => {
					return item;
				})
		    }
		},
		methods: {
			findGrup(id){
		    	let myGrups = grups.grups;

		    	for(let i=0; i<myGrups.length; i++){
		    		
		    		if(myGrups[i].id==id){
		    			return myGrups[i];
		    		}
		    	}
		    }
		}
	}
</script>