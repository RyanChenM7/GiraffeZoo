<script lang='ts'>
    import type {ListingType} from '../types/listing.type';
    export let listing: ListingType;
</script>

<style>
.listing-container {
    outline: 1px solid black;
    box-shadow: 1px;
    padding: 1rem;
    margin: 1rem;
}
</style>

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
        <div class="row">Contact Info: {listing.phone} or {listing.email}</div>
        <div class="row">Comments: {listing.comment} - {listing.fname} {listing.lname}</div>
    </div>
</section>
