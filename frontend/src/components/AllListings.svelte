<script lang="ts">
    import Listing from '../components/Listing.svelte';
    import { goto } from '$app/navigation';
    import type {ListingType} from '../types/listing.type';
    export let listingsData: ListingType[];
    export let allowEdit: boolean;
</script>

<style>
.listing-container {
    outline: 1px solid black;
    box-shadow: 1px;
    padding: 1rem;
    margin: 1rem;
    max-width: 1050px;
}
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


{#each listingsData as lst}
    <div class="container listing-container">
        <Listing listing={lst}/>
        <button class="waterloo-rental-link" on:click={() => goto('postings/view/?listing_id=' + lst.id)}>View Listing</button>
        {#if allowEdit}
            <button class="waterloo-rental-link" on:click={() => goto('postings/edit/?listing_id=' + lst.id)}>Edit Listing</button>
        {/if}
    </div>
{/each}
