<script lang="ts">
    import Header from '../components/Header.svelte';
    let testHeaderStuff : string= "test header stuff";
</script>

<Header headerStuff = {testHeaderStuff}/>
<slot></slot>