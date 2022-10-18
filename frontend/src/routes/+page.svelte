<script lang="ts">
    import Header from '../components/Header.svelte';
    let testHeaderStuff : string= "test header stuff";
    let count = 0;
    let data_loading = false;
    let data_content = "";
    async function clicked() {
        data_loading = true
        count++;
        
        const response = await fetch("http://localhost:5000/testsql",
            {mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            }})
        console.log("runs!!")
        const data = await response.json().then(data => {
            data_loading = false
            console.log("data", data)
            data_content = data.content;
        });
    }
</script>

<style>

</style>
<section>
    <h1>section 1</h1>
</section>
<!--HTML BELOW-->
<Header headerStuff = {testHeaderStuff}/>
<button on:click={clicked}>
    Clicked {count} times, also use this to fetch data
</button>
{#if data_loading}
    <h1>Fetching data</h1>
{/if}
<h3>{data_content}</h3>

<!-- {#await clicked}
	<p>...waiting</p>
{:then data}
	<div>{data}</div>
{:catch error}
	<p>An error occurred!</p>
{/await} -->
<h1>Test</h1>
<p>sheeeesh</p>
