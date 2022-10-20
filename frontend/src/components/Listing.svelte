<script lang='ts'>
    import type {ListingType} from '../types/listing.type';
    export let listing: ListingType;
    console.log("LIST IS ", listing)
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
        <div class="row">This listing was posted by: {listing.id}</div>
        <div class="row">At: ${listing.price} a month for {listing.months}</div>
        <div class="row">Located in: {listing.address}</div>
        <div class="row">{listing.comment} - {listing.id}</div>
    </div>
</section>
