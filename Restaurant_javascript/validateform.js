
/*validating here for the valid phone number it should be number and not empty*/
function validateform()
{
    var phone = document.forms["validateItems"]["Phone"].value;
       if (phone == "" || isNaN(phone)) {
        alert("phone must be filled in with a number.");
    }
    document.forms["validateItems"]["phone"]
    .parentElement.className = "form-control has-error";
 document.forms["validateItems"]["phone"].focus();
 return false;}


 
