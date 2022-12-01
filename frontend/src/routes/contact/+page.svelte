<section>
    <div class="container">
        <form method="POST" action="?/sendEmail">
            <header style="font-size: 50px;">
                CONTACT US
            </header>
            <div class="row">
                <label>
                    Email*
                    <input name="email" type="text" placeholder="Please enter your email" class="form-control waterloo-rental-input" required>
                </label>
            </div>
            <div class="row">
                <label>
                    Subject*
                    <input name="subject" type="text" placeholder="Please enter the subject" class="form-control waterloo-rental-input" required>
                </label>
            </div>
            <div class="row">
                <label>
                    Body*
                    <br>
                    <textarea class="contact-body" name="body" rows="4" cols="50">Please enter the details of your request</textarea>
                    <!-- <input name="body" type="text" value="Please enter the details of your request" class="form-control waterloo-rental-input contact-body" required> -->
                </label>
            </div>
            <button type="submit" class="btn btn-primary">SEND</button>
        </form>
    </div>
</section>

<style>
    .contact-body {
        height: 500px;
        width: 1300px;
    }
</style>