<script lang='ts'>
    import type {ListingType} from '../types/listing.type';
    import { onMount } from 'svelte';
    export let listing: ListingType;
    let map: google.maps.Map;
    const mapId = "1ec9baf35d56fe9b";
    const API_KEY = "AIzaSyCqi0nYziVYz6uzgWO5d8Q-Mlb0F5NzhrA";
    const geocoder = new google.maps.Geocoder();

    let latlong: google.maps.LatLngLiteral;

    geocoder.geocode({address: listing.address}, (results: any, status) => {
        if (status === "OK") {
            latlong = results[0].geometry.location;
            const marker = new google.maps.Marker({
                position: latlong,
                map: map,
            });
        } else {
            alert("Geocode error: " + status);
        }
    } );
    async function getLatLong(address: string) {
        let url = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+API_KEY+"&sensor=true"
        const response = await fetch(url, 
            { 
                headers: { 'Access-Control-Allow-Headers':'strict-origin-when-cross-origin',
                            'access-control-request-headers': 'access-control-allow-headers',
                            'access-control-request-method': 'GET',
                            'access-control-allow-origin':'*' }
            }
        )
        let data: any = await response.json().then(data => {
            console.log("DATA IS:" , data)
            return data.results[0].geometry.location
        });
        return data
    }
    

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
    })
</script>

<style>
.listing-container {
    outline: 1px solid black;
    box-shadow: 1px;
    padding: 1rem;
    margin: 1rem;
}
</style>
<!--The div element for the map -->
<div id="map" style="height: 60vh;"></div>

<section>
    <div class="container listing-container">
        <div class="row">This listing was posted by: {listing.fname} {listing.lname}</div>
        <div class="row">At: ${listing.price} per month for {listing.months} months</div>
        <div class="row">Address: {listing.address}</div>
        <div class="row">City: {listing.city}</div>
        <div class="row">Province: {listing.province}</div>
        <div class="row">Number of rooms: {listing.rooms}</div>
        <div class="row">Number of bathrooms: {listing.bathrooms}</div>
        <div class="row">Square Feet: {listing.feet}</div>
        <div class="row">Has:</div>
        {#if listing.heating}
            <div class="row">Heating</div>
        {/if}
        {#if listing.water}
            <div class="row">Water</div>
        {/if}
        {#if listing.hydro}
            <div class="row">Hydro</div>
        {/if}
        {#if listing.parking}
            <div class="row">Parking</div>
        {/if}
        <div class="row">Contact Info: {listing.phone.substring(0,3)}-{listing.phone.substring(3,6)}-{listing.phone.substring(6,10)} or {listing.email}</div>
        <div class="row">Comments: {listing.comment} - {listing.fname} {listing.lname}</div>
        <img id="avatar" src={"/images/"+listing.id+".png"} alt="avatar"/>
    </div>
</section>
