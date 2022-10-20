<script lang="ts">
    import Header from '../components/Header.svelte';
    let testHeaderStuff : string= "test header stuff";
</script>

<Header headerStuff = {testHeaderStuff}/>
<nav>
    <a href="/">Home</a>
    <a href="/test">About</a>
    <a href="/login">Settings</a>
</nav>
<slot></slot>