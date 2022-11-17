<script lang="ts">
    import type {ListingType} from '../types/listing.type';
    import { onMount } from 'svelte';
    export let listingsData: ListingType[];
    export let mapId: string;
    console.log("listings Data ", listingsData)
    let map: google.maps.Map;
    const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

    onMount(async () => {
        console.log("generating map...")
        map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center,
            zoom: 10,
            mapId
        });
        const marker = new google.maps.Marker({
            position: center,
            map: map,
        });
        console.log("map generated...", map)
    })
</script>


<!-- 
    The `defer` attribute causes the callback to execute after the full HTML
    document has been parsed. For non-blocking uses, avoiding race conditions,
    and consistent behavior across browsers, consider loading using Promises
    with https://www.npmjs.com/package/@googlemaps/js-api-loader.
-->

<h3>My Google Maps Demo</h3>
<!--The div element for the map -->
<div id="map" style="height: 60vh;"></div>




