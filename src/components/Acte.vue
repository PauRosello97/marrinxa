<template>
	<main class="container">
		
		<article id="info">
			<div id="div-h1"><h1> {{ acte.titol }} </h1></div>
			<div id="info-acte">
				<p> <strong> Dia: </strong> {{ acte.dia }} </p>
				<p> <strong> Hora: </strong> {{ acte.hora }} </p>
				<p> <strong> Localització: </strong> {{ acte.lloc }} </p>
				<p> {{ acte.descripcio }} </p>
			</div>

			<section id="grups-grid">
				<div class="grup-div" v-for="grup in acte.grups" :key="grup.id">
					<router-link :to="'/grup/'+findGrup(grup).id" class="nav-link">
						<div class="img_container">
							<img :src="'/dist/grups/'+findGrup(grup).thumbnail">
						</div>
						<div class="info-grup">
							<strong>{{ findGrup(grup).nom }}</strong>
							<p>{{ findGrup(grup).estil }}</p>
						</div>
					</router-link>
				</div>
			</section>
		</article>

		<aside>
			<img :src="'/dist/'+acte.thumbnail">
		</aside>
	</main>
</template>

<style scoped>
	main{
		display: grid;
		grid-template-columns: repeat(2, minmax(100px, 1fr));
		grid-gap: 20px;
  		grid-auto-rows: minmax(100px, 1fr);
	}

	p{
		margin: 0;
	}

	#div-h1{
		margin-bottom: 20px;
	}

	#info-acte{
		padding: 20px;
		background: #e8e1ce;
		display: inline-block;
	}

	img{
		width: 100%;
	}

	aside{
		display: inline-block;
		background: #e8e1ce;
		padding: 30px;
		transform: rotate(2deg);
	}

	#info{
		display: inline-block;
		padding: 20px;
	}

	#grups-grid{
		margin-top: 20px;
		display: grid;
		grid-template-columns: repeat(2, minmax(100px, 1fr));
		grid-gap: 20px;
  		grid-auto-rows: minmax(100px, 1fr);
	}

	.grup-div{
		cursor: pointer;
		overflow: hidden;
		z-index: 0;
		padding: 10px;
		background: #e8e1ce;
		transition: 0.7s;
	}

	a{
		padding: 0px;
		margin: 0px;
	}

	.grup-div:hover{
		padding: 0px;
	}

	.grup-div:hover .info-grup{
		padding: 15px;
	}

	.grup-div img{
		width:100%;
		max-height:100%;
		-webkit-transition: transform .75s;
		transition: transform .75s;
		z-index: 0;
	}

	.grup-div:hover img{
		transform: scale(1.2);
		z-index: 0;
	}

	.info-grup{
		padding-top: 10px;
		z-index: 101;
		transition: .75s;
	}

	.grup-div:nth-child(5n+1) a{	color: #8ab42e;	}
	.grup-div:nth-child(5n+2) a{	color: #168b9d;	}
	.grup-div:nth-child(5n+3) a{	color: #78664e;	}
	.grup-div:nth-child(5n+4) a{	color: #ee8f0f;	}
	.grup-div:nth-child(5n+5) a{	color: #78664e;	}
	.grup-div:hover:nth-child(5n+1){ box-shadow: 0px 0px 20px #8ab42e; }
	.grup-div:hover:nth-child(5n+2){ box-shadow: 0px 0px 20px #168b9d; }
	.grup-div:hover:nth-child(5n+3){ box-shadow: 0px 0px 20px #eacd00; }
	.grup-div:hover:nth-child(5n+4){ box-shadow: 0px 0px 20px #ee8f0f; }
	.grup-div:hover:nth-child(5n+5){ box-shadow: 0px 0px 20px #78664e; }
	.grup-div:nth-child(5n+1){	transform: rotate(-2deg);	}
	.grup-div:nth-child(5n+2){	transform: rotate(2deg);	}
	.grup-div:nth-child(5n+3){	transform: rotate(-1deg);	}
	.grup-div:nth-child(5n+4){	transform: rotate(1deg);	}
	.grup-div:nth-child(5n+5){	transform: rotate(-1deg);	}

	.grup-div:hover{
		transform: rotate(0deg);
	}

	a{
		color: white;
		text-decoration: none;
	}

	@media (max-width: 1000px){
		main{ grid-template-columns: repeat(1, minmax(100px, 1fr)); }
		#grups-grid{ grid-template-columns: repeat(3, minmax(100px, 1fr)); }
	}

	@media (max-width: 700px){
		#grups-grid{ grid-template-columns: repeat(2, minmax(100px, 1fr)); }
	}

</style>


<script>

	import agenda from '../agenda.json'
	import grups from '../grups.json'

	export default {
        computed: {
		    acte() {
		    	let actes = agenda.actes;

		    	for(let i=0; i<actes.length; i++){
		    		
		    		if(actes[i].id==this.$route.params.id){
		    			return actes[i];
		    		}
		    	}
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