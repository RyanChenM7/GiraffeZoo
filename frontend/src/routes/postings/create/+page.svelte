<style>
.waterloo-rental-input {
    margin: 1rem;
    width: 80%;
}
</style>

<p>create your own posting</p>
<div class="container">
    <form method="POST" action="?/createListing">
        <input name="user_id" type="number" placeholder="user_id" class="form-control waterloo-rental-input" required>
        <input name="address" type="text" placeholder="address" class="form-control waterloo-rental-input" required>
        <input name="city" type="text" placeholder="city" class="form-control waterloo-rental-input" required>
        <input name="province" type="text" placeholder="province" class="form-control waterloo-rental-input" required>
        <input name="rooms" type="number" placeholder="rooms" class="form-control waterloo-rental-input" required>
        <input name="bathrooms" type="number" placeholder="bathrooms" class="form-control waterloo-rental-input" required>
        <input name="feet" type="number" placeholder="feet^2" class="form-control waterloo-rental-input" required>
        <input name="heating" type="number" placeholder="heating" class="form-control waterloo-rental-input" required>
        <input name="water" type="number" placeholder="water" class="form-control waterloo-rental-input" required>
        <input name="hydro" type="number" placeholder="hydro" class="form-control waterloo-rental-input" required>
        <input name="type" type="text" placeholder="type" class="form-control waterloo-rental-input" required>
        <input name="parking" type="number" placeholder="parking" class="form-control waterloo-rental-input" required>
        <input name="price" type="number" placeholder="price" class="form-control waterloo-rental-input" required>
        <input name="months" type="number" placeholder="months" class="form-control waterloo-rental-input" required>
        <input name="comment" type="text" placeholder="comment" class="form-control waterloo-rental-input" required>
        <button type="submit" class="btn btn-primary">Create listing</button>
    </form>
</div>