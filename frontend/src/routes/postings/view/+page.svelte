<script lang="ts">
    import DetailedListing from '../../../components/DetailedListing.svelte';
    export let data: any;
</script>



<DetailedListing listing={data.content}/>
