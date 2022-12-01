<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data: any;
    const listing = data.content
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
        console.log(data);
        await fetch('http://127.0.0.1:5173/api/edit', {
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
    

<section>
    <div class="container">
        Editting your posting:
    </div>
</section>

<div class="container">
    <form method="POST" action="?/editListing">
        <label>Address
            <input id="address" name="address" type="text" value="{listing.address}" class="form-control waterloo-rental-input" required>
        </label>
        <label>City
            <input name="city" type="text" value="{listing.city}" class="form-control waterloo-rental-input" required>
        </label>
        <label>Province
            <input name="province" type="text" value="{listing.province}" class="form-control waterloo-rental-input" required>
        </label>
        <label>Number of Rooms
            <input name="rooms" type="number" value="{listing.rooms}" class="form-control waterloo-rental-input" required>
        </label>
        
        <label>Number of Bathrooms
            <input name="bathrooms" type="number" value="{listing.bathrooms}" class="form-control waterloo-rental-input" required>
        </label>
        <label>Square feet
            <input name="feet" type="number" value="{listing.feet}" class="form-control waterloo-rental-input" required>
        </label>
        <label>Heating (1 = yes, 0 = no)
            <input name="heating" type="number" value="{listing.heating}" class="form-control waterloo-rental-input" required>
        </label>
        <label>Water (1 = yes, 0 = no)
            <input name="water" type="number" value="{listing.water}" class="form-control waterloo-rental-input" required>
        </label>
        <label>Hydro (1 = yes, 0 = no)
            <input name="hydro" type="number" value="{listing.hydro}" class="form-control waterloo-rental-input" required>
        </label>
        <label>Type
            <input name="type" type="text" value="{listing.type}" class="form-control waterloo-rental-input" required>
        </label>
        <label>Parking (1 = yes, 0 = no)
            <input name="parking" type="number" value="{listing.parking}" class="form-control waterloo-rental-input" required>
        </label>
        <label>Price
            <input name="price" type="number" value="{listing.price}" class="form-control waterloo-rental-input" required>
        </label>
        <label>Number of months
            <input name="months" type="number" value="{listing.months}" class="form-control waterloo-rental-input" required>
        </label>
        
        <label>Further Comments
            <input name="comment" type="text" value="{listing.comment}" class="form-control waterloo-rental-input" required>
        </label>
        <input id="id" name="id" type="text" value="{listing.id}" class="form-control waterloo-rental-input" hidden>

        <label>Upload new photo
            {#if avatar}
            <img id="avatar" src={avatar} alt="avatar"/>
            {/if}
            <input name="files" class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" bind:files bind:this={fileInput} on:change={() => getBase64(files[0])}/>
            <button class="upload-btn" on:click={ () => fileInput.click() }>Upload Image</button>
        </label>
        
        <button type="submit" class="btn btn-primary">Edit listing</button>
    </form>
</div>