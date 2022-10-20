<script lang="ts">
    let count = 0;
    function clicked() {
        count++;
    }
</script>

<style>

</style>

<!--HTML BELOW-->
<button on:click={clicked}>
    Clicked {count} times
</button>
<div>Sign up to see your postings</div>