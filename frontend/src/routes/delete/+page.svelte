<script lang="ts">
</script>

<style>
.waterloo-rental-input {
    margin: 1rem;
    width: 80%;
}
</style>

<!--HTML BELOW-->
<section>
    <div class="container">
        <form method="POST" action="?/deleteAccount">
            <input name="username" type="text" placeholder="username" class="form-control waterloo-rental-input" required>
            <button type="submit" class="btn btn-primary">Delete Account</button>
        </form>
    </div>
</section>