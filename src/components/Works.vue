<template>
	<section id="works">
		<div class="wrapper">
			<work-item v-for="(work, key) in works"
			           :key="key"
			           :workData='work'></work-item>
		</div>
	</section>
</template>

<script>
import WorkItem from './WorkItem.vue'
import works from '@/assets/data/data.json'

export default {
	name: 'Works',
	components: { WorkItem },
	props: ['itemSize'],
	data() {
		return {
			works: works.works
		}
	},
	created() {
		this.works = works.works
	}
}
</script>
