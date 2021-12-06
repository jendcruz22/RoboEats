window.onload = function(){

	// Get elements
    var formHandle = document.forms.contactForm;
    var statusMessage = document.getElementById("statusMessage");

    formHandle.onsubmit = function(){
        
        // Get fields
        var firstName = formHandle.firstName;
        var lastName = formHandle.lastName;
        var email = formHandle.email;
        var message = formHandle.message;

        // Validate First Name
        if(firstName.value === "" || firstName.value === null){
			firstName.focus();
            statusMessage.innerHTML = "Please enter your First Name.";
			return false;
		}
        // Validate Last Name
        if(lastName.value === "" || lastName.value === null){ 
            lastName.focus();
            statusMessage.innerHTML = "Please enter your Last Name.";
            return false;
        }
        // Validate Email
        if(email.value === "" || email.value === null){ 
            email.focus();
            statusMessage.innerHTML = "Please enter your Email.";
            return false;
        }
        // Validate Message
        if(message.value === "" || message.value === null){ 
            message.focus();
            statusMessage.innerHTML = "Please enter your Message.";
            return false;
        }

        // Clear form
        formHandle.reset();

        // Display success message
        statusMessage.innerHTML = "Thank you for your message.<br>We will contact you within 2 business days.";

        // Prevent submission
        return false;
    }
}