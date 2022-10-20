<script>
    /**
	 * @type {string}
	 */
    export let headerStuff = "Test Header";
</script>

<style>
</style>

<section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">{headerStuff}</a>
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
            <li class="nav-item">
                <a class="nav-link" href="/postings/create">Install Bitcoin Miner</a>
            </li>
            <li class="nav-item me-auto">
                <a class="nav-link me-auto" href="/login">Login</a>
            </li>
            <li class="nav-item me-auto">
                <a class="nav-link me-auto" href="/delete">Delete Account</a>
            </li>
        </ul>
        </div>
    </nav>
</section>

