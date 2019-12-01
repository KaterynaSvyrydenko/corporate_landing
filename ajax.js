const myForm = $('#myForm');
const result_form = $('#result_form');

$(document).ready(function(){
    $('#button').click(
        function(){
            sendAjaxForm('result_form', 'myForm', 'action_ajax_form.php');
            return false;
        }
    );
});

function sendAjaxForm( result_form, myForm, url){
    $.ajax({
        url: 'action_ajax_form.php',
        type: 'POST',
        dataType: 'html',
        data: $('#'+myForm).serialize(),
        success: function(response){
            result = $.parseJSON(response);
            $('#result_form').html('Name: '+result.name+'<br>EMAIL: '+result.email+'<br>PASSWORD: '+result.password);
        },
        error: function(response){
            $(result_form).html('Error. Data not send')
        }
    });
}
