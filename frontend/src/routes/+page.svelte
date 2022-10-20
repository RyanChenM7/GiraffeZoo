<script lang="ts">
    import AllListings from '../components/AllListings.svelte';
    /** @type {import('./$types').PageData} */
    export let data: any;
    // async function clicked() {
    //     data_loading = true
    //     count++;
        
    //     const response = await fetch("http://localhost:5000/testsql",
    //         {mode: 'cors',
    //         headers: {
    //             'Access-Control-Allow-Origin':'*'
    //         }})
    //     console.log("runs!!")
    //     const data = await response.json().then(data => {
    //         data_loading = false
    //         console.log("data", data)
    //         data_content = data.content;
    //     });
    // }
    console.log("RUNS!", data)
</script>

<style>
</style>

<!--HTML BELOW-->
<AllListings listingsData={data.content}/>


