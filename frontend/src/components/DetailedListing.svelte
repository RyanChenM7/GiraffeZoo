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
        <div class="row">Location: {listing.address}</div>
        <div class="row">Contact Info: {listing.phone} or {listing.email}</div>
        <div class="row">{listing.comment} - {listing.fname} {listing.lname}</div>
    </div>
</section>
