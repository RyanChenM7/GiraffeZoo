<script lang="ts">
	import { goto } from "$app/navigation";
    function redirectToRegister() {
        goto('/register');
    }
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
            <input name="email" type="text" placeholder="email or username" class="form-control waterloo-rental-input" required>
            <input name="password" type="password" placeholder="password" class="form-control waterloo-rental-input" required>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <button on:click={redirectToRegister} class="btn btn-primary">No Account? Register Here</button>
    </div>
</section>