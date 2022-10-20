<script lang="ts">
    import Listing from '../components/Listing.svelte';
    export let listingsData: any[];
</script>


{#each listingsData as lst}
    <Listing poster={lst.poster} 
    monthlyRent={lst.monthlyRent} 
    contractLength={lst.contractLength} 
    location={lst.location} 
    customComment={lst.customComment}/>
{/each}
