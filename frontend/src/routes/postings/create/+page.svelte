<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data: any;
    let fileInput: any;
    let files:any;
    let avatar: any;
    function getBase64(image: any) {
        console.log('base64 runs!', image)
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e: any) => {
            avatar = e.target.result;
            uploadFunction(e.target.result);
        };
    };
    async function uploadFunction(imgBase64: any) {
        const data: any = {}
        const imgData = imgBase64.split(',');
        data["image"] = imgData[1];
        await fetch('http://127.0.0.1:5173/api/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(data)
        });
    }; 
</script>

<style>
.waterloo-rental-input {
    margin: 1rem;
    width: 80%;
}
</style>


<div class="container">
    <form method="POST" action="?/createListing">
        <p style="font-size: 50px;">Create a Listing</p>
        <input name="address" type="text" placeholder="address" class="form-control waterloo-rental-input" required>
        <input name="city" type="text" placeholder="city" class="form-control waterloo-rental-input" required>
        <input name="province" type="text" placeholder="province" class="form-control waterloo-rental-input" required>
        <input name="rooms" type="number" placeholder="rooms" class="form-control waterloo-rental-input" required>
        <input name="bathrooms" type="number" placeholder="bathrooms" class="form-control waterloo-rental-input" required>
        <input name="feet" type="number" placeholder="feet^2" class="form-control waterloo-rental-input" required>
        <input name="heating" type="number" placeholder="heating (1=yes, 0=no)" class="form-control waterloo-rental-input" required>
        <input name="water" type="number" placeholder="water (1=yes, 0=no)" class="form-control waterloo-rental-input" required>
        <input name="hydro" type="number" placeholder="hydro (1=yes, 0=no)" class="form-control waterloo-rental-input" required>
        <input name="type" type="text" placeholder="type" class="form-control waterloo-rental-input" required>
        <input name="parking" type="number" placeholder="parking (1=yes, 0=no)" class="form-control waterloo-rental-input" required>
        <input name="price" type="number" placeholder="price" class="form-control waterloo-rental-input" required>
        <input name="months" type="number" placeholder="months" class="form-control waterloo-rental-input" required>
        <input name="comment" type="text" placeholder="comment" class="form-control waterloo-rental-input" required>
        {#if avatar}
            <img id="avatar" src={avatar} alt="avatar"/>
        {/if}
        <input name="files" class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" bind:files bind:this={fileInput} on:change={() => getBase64(files[0])}/>
        <button class="upload-btn" on:click={ () => fileInput.click() }>Upload Image</button>
        <button type="submit" class="btn btn-primary">Create listing</button>
    </form>
</div>