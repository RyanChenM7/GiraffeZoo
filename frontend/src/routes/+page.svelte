<script lang="ts">
    import AllListings from '../components/AllListings.svelte';
    import type {ListingType} from '../types/listing.type';
    import {onMount} from "svelte";
    /** @type {import('./$types').PageData} */
    export let data: any;
    let pagination = 0;
    let pageLimit = 50;
</script>

<style>
</style>

<!--HTML BELOW-->
<AllListings listingsData={data.content}/>


