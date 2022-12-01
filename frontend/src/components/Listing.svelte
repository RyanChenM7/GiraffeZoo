<script lang='ts'>
    import type {ListingType} from '../types/listing.type';
    export let listing: ListingType;
</script>

<style>
.waterloo-img {
    max-width: 500px;
}
</style>

<section>
    <div class="row">
        <div class="col-6">
            <div class="row">This listing was posted by: {listing.fname} {listing.lname}</div>
            <div class="row">At: ${listing.price} a month for {listing.months} months</div>
            <div class="row">Address: {listing.address}</div>
            <div class="row">For more info contact at: {listing.phone.substring(0,3)}-{listing.phone.substring(3,6)}-{listing.phone.substring(6,10)} or {listing.email}</div>
            <div class="row">{listing.comment} - {listing.fname} {listing.lname}</div>
        </div>
        <div class="col-6"><img class="waterloo-img"id="avatar" src={"/images/"+listing.id+".png"} alt="avatar"/></div>
    </div>
</section>
