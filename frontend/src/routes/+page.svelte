<script lang="ts">
    import AllListings from '../components/AllListings.svelte';
    import {onMount} from "svelte";
    /** @type {import('./$types').PageData} */
    export let data: any;
    let pagination = 0;
    let pageLimit = 50;
</script>

<style>
</style>

<!--HTML BELOW-->
<h1>{data.title}</h1>
<AllListings listingsData={data.content}/>


