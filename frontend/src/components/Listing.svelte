<script>
    /**
	 * @type {string}
	 */
    export let poster;
    /**
	 * @type {number}
	 */
    export let monthlyRent;
    /**
	 * @type {string}
	 */
    export let contractLength;
    /**
	 * @type {string}
	 */
    export let location;
    /**
	 * @type {string}
	 */
    export let customComment;
</script>

<style>
.listing-container {
    outline: 1px solid black;
    box-shadow: 1px;
    padding: 1rem;
    margin: 1rem;
}
</style>

<section>
    <div class="container listing-container">
        <div class="row">This listing was posted by: {poster}</div>
        <div class="row">At: ${monthlyRent} a month for {contractLength}</div>
        <div class="row">Located in: {location}</div>
        <div class="row">{customComment} - {poster}</div>
    </div>
</section>
