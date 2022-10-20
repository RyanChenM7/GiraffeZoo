<script lang="ts">
    let count = 0;
    function clicked() {
        count++;
    }
</script>

<style>

</style>

<!--HTML BELOW-->
<section>
    <form method="POST" action="?/login">
        <input name="email" type="email" placeholder="email" required>
        <input name="password" type="password" placeholder="password" required>
        <button type="submit">Login</button>
    </form>
    <form method="POST" action="?/register">
        <input name="username" type="text" placeholder="username" required>
        <input name="fname" type="text" placeholder="firstname" required>
        <input name="lname" type="text" placeholder="lastname" required>
        <input name="email" type="email" placeholder="email" required>
        <input name="phone" type="tel" placeholder="xxx-xxx-xxxx" required>
        <input name="password" type="password" placeholder="password" required>
        <button type="submit">Register</button>
    </form>
</section>