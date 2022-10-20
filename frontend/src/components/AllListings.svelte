<script lang="ts">
    import Listing from '../components/Listing.svelte';
    import type {ListingType} from '../types/listing.type';
    export let listingsData: ListingType[];
    console.log("LISTINGS DATA", listingsData)
</script>


{#each listingsData as lst}
    <Listing listing={lst}/>
{/each}
