<!--
	#F7F7FF : White
	#1C1C1C : Black
	#DF054F : Red
	#FED766 : Yellow
	#009FB7 : Blue

	#8ab42e : Verd
	#168b9d : Blau
	#eacd00 : Groc
	#ee8f0f : Taronja
	#78664e : Marró
	#e8e1ce : Fons
-->

<template>
	<div>
		<app-header id="header" class="sticky-top"></app-header>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<app-footer></app-footer>
	</div>
</template>

<style scoped>
	#header{
		z-index: 10;
	}

  	.fade-enter-active,
	.fade-leave-active {
		transition-duration: 0.3s;
		transition-property: opacity;
		transition-timing-function: ease;
	}

	.fade-enter,
	.fade-leave-active {
	 	opacity: 0
	}
</style>

<script>
	import Header from './components/layout/Header.vue';
	import Footer from './components/layout/Footer.vue';
	export default {
		components: {
			appHeader: Header,
			appFooter: Footer
		}
	}
</script>
