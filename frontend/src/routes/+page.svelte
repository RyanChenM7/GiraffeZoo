<script lang="ts">
    import AllListings from '../components/AllListings.svelte';
    import GoogleMap from '../components/GoogleMap.svelte';
    import type {ListingType} from '../types/listing.type';
    /** @type {import('./$types').PageData} */
    export let data: any;
    const mapId = "1ec9baf35d56fe9b";
    const API_KEY = "AIzaSyCqi0nYziVYz6uzgWO5d8Q-Mlb0F5NzhrA";
    let pagination = 0;
    let pageLimit = 50;
    let ready = true;
    // Initialize and add the map
</script>

<style>
</style>

<svelte:head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqi0nYziVYz6uzgWO5d8Q-Mlb0F5NzhrA&callback"defer async></script>
</svelte:head>

{#if ready}
<GoogleMap listingsData={data.content} mapId={mapId}></GoogleMap>
{/if}
<!--HTML BELOW-->
<AllListings listingsData={data.content} allowEdit={false}/>




