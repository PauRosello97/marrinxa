<template>
	<main class="container">

		<div id="info">
			<div id="div-titol">
				<h1> {{ grup.nom }} </h1>
				<p> {{ grup.estil }} </p>
			</div>

			<div id="div-img">
				<img :src="'/dist/grups/'+grup.thumbnail">
			</div>

			<p id="descripcio"> {{ grup.descripcio }} </p>

		</div>
		
		<div class="div-video">
			<iframe :src="grup.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
		</div>

	</main>
</template>

<style scoped>

	main{
		display: grid;
		grid-template-columns: 45% 55%;
		grid-template-rows: auto auto 1fr;
	}

	@media (max-width: 768px) {
		main{
			grid-template-columns: 100%;
		}
		
	}

	img{
		width: 100%;
	}

	#div-img{
		padding: 10px;
		background: #e8e1ce;
		grid-row-start: 1;
		grid-row-end: 3;
		grid-column-start: 2;
		grid-column-end: 3;
		transform: rotate(1deg);
		transition: 0.7s;
	}

	#info{
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto auto 1fr;
		padding-right: 10px;
	}

	#div-titol{
		text-align: right;
		background: #e8e1ce;
		padding: 10px;
		margin-right: 10px;
		transform: rotate(-2deg);
		transition: 0.7s;
	}

	#descripcio{
		padding: 10px;
		grid-column-start: 1;
		grid-column-end: 3;
		background: #e8e1ce;
		margin-top: 10px;
		transform: rotate(-1deg);
		transition: 0.7s;
	}

	.div-video {
	    position: relative;
	    width: 100%;
	    height: 0;
	    padding-bottom: 56.25%;
	}

	.video {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	}

	#descripcio:hover{ box-shadow: 0px 0px 20px #8ab42e; transform: rotate(0); }
	#div-titol:hover{ box-shadow: 0px 0px 20px #168b9d; transform: rotate(0); }
	#div-img:hover{ box-shadow: 0px 0px 20px #eacd00; transform: rotate(0); }

</style>


<script>

	import agenda from '../agenda.json'
	import grups from '../grups.json'

	export default {
        computed: {
		    grup() {
		    	let myGrups = grups.grups;

		    	for(let i=0; i<myGrups.length; i++){
		    		
		    		if(myGrups[i].id==this.$route.params.id){
		    			return myGrups[i];
		    		}
		    	}
		    }
		}
	}
	
</script>