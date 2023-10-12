$(document).ready(function(){ 

	//alert

	$('#icon-close-alert-success').click(function(){
        $('#input-alert-edit-success').attr('style','display:none');
    });
    $('#icon-close-alert-error').click(function(){
        $('#input-alert-edit-error').attr('style','display:none');
    });

    //ubah sesuai dengan keperluan
    $('#icon-edit-data').click(function(){
        $('#input-alert-edit-success').attr('style','display:none');
        $('#input-alert-edit-error').attr('style','display:none');
    });



});