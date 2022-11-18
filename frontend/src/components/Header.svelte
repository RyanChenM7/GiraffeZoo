<script>
    /**
	 * @type {string}
	 */
    export let auth;
    let isLoggedIn = auth.isAuth;
</script>

<style>
</style>

<section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Waterloo Housing</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/">View Listings</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/postings">Manage My Listings</a>
            </li>
            {#if !isLoggedIn}
                <li class="nav-item me-auto">
                    <a class="nav-link me-auto" href="/login">Login</a>
                </li>
            {/if}
            {#if isLoggedIn}
                <li class="nav-item me-auto">
                    <a class="nav-link me-auto" href="/logout">Log Out</a>
                </li>
                <li class="nav-item me-auto">
                    <a class="nav-link me-auto" href="/delete">Delete Account</a>
                </li>
            {/if}
        </ul>
        </div>
    </nav>
</section>

