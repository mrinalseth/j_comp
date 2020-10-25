
Stripe.setPublishableKey('sk_test_51Gw5JeKPMH9ctalLYF2Uxbsw5GpythabF3B7arJMC5ofw4jKK84ejSRGta3ui8XbiPJX9y3iZ1yfLtz9BVXyi0Db00uuITCes3');

var $form = $('#checkout-form')
$form.submit(function(event){
    $('#charge-error').removeClass("d-none");
    $form.find('button').prop('disable',true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card_name').val()
    }, stripeResponseHandler);
    return false;
});

function stripResponseHandler(status,response){
    if (response.error) { // Problem!

        // Show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass("d-none");
        $('button').prop('disabled', false); // Re-enable submission
    
    } else { // Token was created!
    
        // Get the token ID:
        var token = response.id;
    
        // Insert the token into the form so it gets submitted to the server:
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));
    
        // Submit the form:
        $form.get(0).submit();
    }
}