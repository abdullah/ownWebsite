<template>
	<div class="page-inset">
		<!-- hero title-->
	    <section class="hero-title">
	      <div class="wrapper">
	        <h1>Hello,</h1>
	        <p>I'm Hamit, an 18 year Front-end Developer from Turkey.You can see my works down here.</p>
	      </div>
	    </section>
		<works></works>
	</div>
</template>

<script>
import Works from './Works.vue'

export default {
	name: 'Home',
	components: { Works }
}
</script>
