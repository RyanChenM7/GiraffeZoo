<script lang="ts">
    import Listing from '../components/Listing.svelte';
    import { goto } from '$app/navigation';
    import type {ListingType} from '../types/listing.type';
    export let listingsData: ListingType[];
    export let allowEdit: boolean;
</script>


{#each listingsData as lst}
    <Listing listing={lst}/>
    <button on:click={() => goto('postings/view/?listing_id=' + lst.id)}>View Listing</button>
    {#if allowEdit}
        <button on:click={() => goto('postings/edit/?listing_id=' + lst.id)}>Edit Listing</button>
    {/if}
{/each}
