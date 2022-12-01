<script lang="ts">
    import AllListings from '../../components/AllListings.svelte';
    /** @type {import('./$types').PageData} */
    export let data: any;
    let pagination = 0;
    let pageLimit = 50;
</script>

<style>
.waterloo-rental-link {
    background-color: grey;
    color: white;
    text-align: center;
}
.waterloo-rental-link:hover {
    background-color: darkgray;
    cursor: pointer;
}
</style>

<!--HTML BELOW-->
<section>
    <div class="container">
        <div class="row">
            <div class="col-10">
                <p>My Listings</p>
                <AllListings listingsData={data.content} allowEdit={true}/>
            </div>
            <div class="col-2">
                <div class="row">
                    <a class="nav-link waterloo-rental-link" href="postings/create">Create Listing</a>
                    <a class="nav-link  waterloo-rental-link" href="postings/delete">Delete a Listing</a>
                </div>
            </div>
        </div>
    </div>
</section>