<template>
	<div class="work-item" :style="{'background-image': this.thumb}">
		<a class="details" :href="detailLink">
			<span class="title"> {{ workData.title }} </span>
			<span class="tag"> {{ workData.category }} </span>
		</a>
	</div>
</template>

<script>
export default {
	name: 'WorkItem',
	props: ['workData'],
	computed:{
		detailLink(){
			return `/project/${this.workData.url}`
		}
	},
	data(){
		return{
			thumb: `url(${this.workData.thumb})`
		}
	}
}
</script>
