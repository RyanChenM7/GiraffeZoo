<script lang="ts">
    import type {ListingType} from '../types/listing.type';
    import { onMount } from 'svelte';
    export let listingsData: ListingType[];
    export let mapId: string;
    //const geocoder = new google.maps.Geocoder();
    //console.log("listings Data ", listingsData)
    // listingsData.forEach((listing) => {
    //     console.log("listing", listing.address)
    //     geocoder.geocode({address: listing.address}, (results, status) => {
    //         if (status === "OK") {
    //             console.log(results);
    //         } else {
    //             alert("Geocode error: " + status);
    //         }
    //     } );
    // })
    let map: google.maps.Map;
    const center: google.maps.LatLngLiteral = {lat: 43.48144741242103, lng: -80.52660029564518};
    const coords = [
        [43.48144741242103, -80.52660029564518],
        [43.484147591519125, -80.5351466913817],
        [43.47426059169504, -80.53551731039134],
        [43.47676756004974, -80.53132365399857],
        [43.490383973546216, -80.54483233759558],
        [43.475107843835794, -80.53236130247639],
        [43.480691460563406, -80.51290658873488],
        [43.45724086161414, -80.55647869625912],
        [43.481488910364824, -80.52661739540584]
    ]
    onMount(async () => {
        console.log("generating map...")
        map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center,
            zoom: 13,
            mapId
        });
        coords.forEach((coord) => {
            const marker = new google.maps.Marker({
                position: {lat: coord[0], lng: coord[1]},
                map: map,
            });
        })
        
        console.log("map generated...", map)
    })
</script>




<!-- 
    The `defer` attribute causes the callback to execute after the full HTML
    document has been parsed. For non-blocking uses, avoiding race conditions,
    and consistent behavior across browsers, consider loading using Promises
    with https://www.npmjs.com/package/@googlemaps/js-api-loader.
-->

<!--The div element for the map -->
<div id="map" style="height: 60vh; position: fixed !important;"></div>




