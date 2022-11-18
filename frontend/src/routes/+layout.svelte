<script lang="ts">
    import Header from '../components/Header.svelte';
    export let data: any;
</script>

<Header auth = {data.auth}/>
<slot></slot>