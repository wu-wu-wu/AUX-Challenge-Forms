/* Your JavaScript goes here */

// Modernizr
if(Modernizr.feature) {
  // yes - use HTML5 validation
} else {
  // replace with JQuery validation
}


// parsley form input validator
$(document).ready(function() {
    $('#createportfolioform').parsley();

    $("#submitbutton").on('click', function() {
        $('#createportfolioform').parsley().validate("second");
        if ($('#createportfolioform').parsley().isValid()) {
            console.log('valid');
        } else {
            console.log('not valid');
        }
    });
});


// jquery credit card validator
$('#cardnumber').validateCreditCard(function(result) {
    $('#'+ result.card_type.name).prop("checked", true);
});


// jquery credit card validator with more conditions lol i failed
/*
$('#cardnumber').validateCreditCard(function() {

    // this will execute everytime the value of the `#cardnumber` field changes
    if (result.length_valid && result.luhn_valid) {
        if (result.card_type.name == 'visa') {
          alert(result.card_type.name);
          $('label[for='+ result.card_type.name +'] input').prop("checked", true);
        } else if (result.card_type.name == 'mastercard') {
          $("#creditcardradio4").prop("checked", true);
        }
        // repeat for rest of card types
    } else {
        // just print an error
        console.log('ew');
    }
});
*/

//jquery listener
/*
$(document).ready(function () {
  //jquery goes here
});
*/
