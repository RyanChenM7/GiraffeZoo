<script lang='ts'>
    import type {ListingType} from '../types/listing.type';
    export let listing: ListingType;
</script>

<style>
    .waterloo-rental-input {
        margin: 1rem;
        width: 80%;
    }
    </style>
    
    <p>create your own posting</p>
    <div class="container">
        <input name="address" type="text" placeholder="{listing.address}" class="form-control waterloo-rental-input" required>
        <input name="city" type="text" placeholder="{listing.city}" class="form-control waterloo-rental-input" required>
        <input name="province" type="text" placeholder="{listing.province}" class="form-control waterloo-rental-input" required>
        <input name="rooms" type="number" placeholder="{String(listing.rooms)}" class="form-control waterloo-rental-input" required>
        <input name="bathrooms" type="number" placeholder="{String(listing.bathrooms)}" class="form-control waterloo-rental-input" required>
        <input name="feet" type="number" placeholder="{String(listing.feet)}" class="form-control waterloo-rental-input" required>
        <input name="heating" type="number" placeholder="{String(listing.heating)}" class="form-control waterloo-rental-input" required>
        <input name="water" type="number" placeholder="{String(listing.water)}" class="form-control waterloo-rental-input" required>
        <input name="hydro" type="number" placeholder="{String(listing.hydro)}" class="form-control waterloo-rental-input" required>
        <input name="type" type="text" placeholder="{listing.type}" class="form-control waterloo-rental-input" required>
        <input name="parking" type="number" placeholder="{String(listing.parking)}" class="form-control waterloo-rental-input" required>
        <input name="price" type="number" placeholder="{String(listing.price)}" class="form-control waterloo-rental-input" required>
        <input name="months" type="number" placeholder="{String(listing.months)}" class="form-control waterloo-rental-input" required>
        <input name="comment" type="text" placeholder="{listing.comment}" class="form-control waterloo-rental-input" required>
        <button type="submit" class="btn btn-primary">Edit listing</button>
    </div>
