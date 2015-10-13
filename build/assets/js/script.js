/* Your JavaScript goes here */

//jquery listener
/*
$(document).ready(function () {
  //jquery goes here
});
*/


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

$('#cardnumber').validateCreditCard(function(result) {
  alert(result.card_type.name);
  $('#'+ result.card_type.name).prop("checked", true);
});
