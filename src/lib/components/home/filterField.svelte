<script lang="ts">
	import Filter from './filter.svelte';
	export let search: (e: any) => void;
</script>

<div
	class="w-full h-16 dark:bg-primary bg-primaryLight border dark:border-secondary border-primaryLight rounded-md flex items-center justify-between overflow-hidden"
>
	<div class="flex">
		<Filter text={'react'} icon={'mdi:react'} />
		<Filter text={'vue'} icon={'mdi:vuejs'} />
		<Filter text={'svelte'} icon={'simple-icons:svelte'} />
	</div>
	<input
		on:input={(e) => search(e)}
		class="bg-transparent w-full mx-2 border dark:border-secondary border-secondaryLight p-2 rounded-md outline-none"
		type="text"
		placeholder="search posts, authors..."
	/>
</div>
