let form=document.getElementById("feedback")
    form.addEventListener("submit",function(e) {
        e.preventDefault();
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;

        let message=document.getElementById("message").value;
        
        if (name.trim()===""|| email.trim() === ""|| message.trim()=== "") {
            alert("Please fill in all details reqired")
            
        } else{
            console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

            alert("Thank you for your feedback")
            form.reset();
        }


        
    })