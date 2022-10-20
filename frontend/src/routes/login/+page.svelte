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
        <form method="POST" action="?/login">
            <input name="email" type="email" placeholder="email" class="form-control waterloo-rental-input" required>
            <input name="password" type="password" placeholder="password" class="form-control waterloo-rental-input" required>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
    <div class="container">
        <form method="POST" action="?/register">
            <input name="username" type="text" placeholder="username" class="form-control waterloo-rental-input" required>
            <input name="fname" type="text" placeholder="firstname" class="form-control waterloo-rental-input" required>
            <input name="lname" type="text" placeholder="lastname" class="form-control waterloo-rental-input" required>
            <input name="email" type="email" placeholder="email" class="form-control waterloo-rental-input" required>
            <input name="phone" type="tel" placeholder="xxx-xxx-xxxx" class="form-control waterloo-rental-input" required>
            <input name="password" type="password" placeholder="password" class="form-control waterloo-rental-input" required>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</section>