// OFF-CANVAS-MENU-MOBILE CALL FUNCTION
$(document).foundation();


// FORM VALIDATION FUNCTION
function formValidation() {

      //FIRST AND LAST NAMES
      let regExfName = /^[a-zA-Z]+$/;
      let regExlName = /^[a-zA-Z]+$/;
      let fname = document.getElementById('fname').value;
      let lname = document.getElementById('lname').value;
      let namesWarning = "* Please insert a valid name";

      if ((regExfName.test(fname) === false)) {
          document.getElementById('alertfName').innerHTML = namesWarning;

      } else {
        document.getElementById('alertfName').innerHTML = "";
      }

      if ((regExlName.test(lname) === false)) {
          document.getElementById('alertlName').innerHTML = namesWarning;

      } else {
        document.getElementById('alertlName').innerHTML = "";
      }



      //EMAIL
        let regExemail = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
        let email = document.getElementById('email').value;
        let emailWarning = "* Please insert a valid email";

        if ((regExemail.test(email) === false)) {
            document.getElementById('alertEmail').innerHTML = emailWarning;

        } else {
          document.getElementById('alertEmail').innerHTML = "";
        }


        //PHONE NUMBER
        let regExPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;
        let phoneNumber = document.getElementById('phonenumber').value;
        let phoneInvalidWarning = "* Please insert a valid phone number";

        if ((regExPhone.test(phoneNumber) === false)) {
            document.getElementById('alertPhoneNumber').innerHTML = phoneInvalidWarning;

        } else {
          document.getElementById('alertPhoneNumber').innerHTML = "";
        }



        //MESSAGE
        let message = document.getElementById('message').value;
        let messageWarning = "* The message field cannot be empty";

        if (message === "") {
            document.getElementById('alertMessage').innerHTML = messageWarning;

        } else {
          document.getElementById('alertMessage').innerHTML = "";
        }




        // TERMS AND CONDITIONS
        let termsConditions = document.getElementById('terms-and-conditions');
        let termsConditionsWarning = "* Please agree with our terms and conditions to continue"

        if (termsConditions.checked === false) {
          document.getElementById('alertTermsConditions').innerHTML = termsConditionsWarning;

        } else {
          document.getElementById('alertTermsConditions').innerHTML = "";
        }



        // SUBMISSION ON SUCCEFUL
        if (((regExfName.test(fname) === true)) && ((regExlName.test(lname) === true)) && ((regExemail.test(email) === true)) && ((regExPhone.test(phoneNumber) === true)) && (message != "") && (termsConditions.checked === true)) {
              alert ("Thank you Mr./Ms. " + lname + ",\n your message has successfully sent.\n We'll get in touch soon as possible.\n\n Kind,\n Your Hero Boost team");

        }

}



// NEWS-LETTER EMAIL VALIDATION FUNCTION
function newsLetterValidation() {

  //EMAIL VALIDATION
  let regExemail = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
  let email = document.getElementById('news-letter').value;
  let emailOne = document.getElementById('news-letter-1').value;
  let emailWarning = "* Please insert a valid email";

  if ((regExemail.test(email) === false)) {
      alert(emailWarning);

  } else {
    document.getElementById('alertEmail').innerHTML = "";
  }



    if ((regExemail.test(emailOne) === true)) {
        alert("Thank you for subscribing to our News Letter. Press OK to continue!");
    }


}

/* Owl-Carousel Multiple Slide

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
    });
}); */
