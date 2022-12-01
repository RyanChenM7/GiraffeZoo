<script lang="ts">
    import Listing from '../../../components/Listing.svelte';
    import { goto } from '$app/navigation';
    import type {ListingType} from '../../../types/listing.type';
    export let listing: ListingType;
</script>



<Listing listing={listing}/>
