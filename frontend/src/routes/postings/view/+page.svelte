<script lang="ts">
    import DetailedListing from '../../../components/DetailedListing.svelte';
    import { goto } from '$app/navigation';
    import type {ListingType} from '../../../types/listing.type';
    export let data: any;
</script>



<DetailedListing listing={data}/>
