// Modernizr
if(Modernizr.input.required) {
  // yes - use HTML5 validation
  console.log("HTML5 input required detected");
} else {
  console.log("fallback JQuery input required validation activated")
  // replace with JQuery validation
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
}

// jquery credit card validator
var result = $('#cardnumber').validateCreditCard({ accept: ['visa', 'mastercard', 'amex', 'discover'] });

$('#cardnumber').validateCreditCard(function(result) {
  if (result.length_valid == true && result.luhn_valid == true){
    $('#'+ result.card_type.name).prop("checked", true);
  } else {
    $('#'+ result.card_type.name).prop("checked", false);
    console.log("not enough numbers and invalid sequence");
  }
});


/* credit card validator previous working version 10/17/15
$('#cardnumber').validateCreditCard(function(result) {

    $('#'+ result.card_type.name).prop("checked", true);

  }
});

*/
