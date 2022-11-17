<style>
.waterloo-rental-input {
    margin: 1rem;
    width: 80%;
}
</style>

<p>delete a posting</p>
<section>
    <div class="container">
        <form method="POST" action="?/deleteListing">
            <input name="id" type="number" placeholder="id" class="form-control waterloo-rental-input" required>
            <button type="submit" class="btn btn-primary">Delete</button>
        </form>
    </div>
</section>