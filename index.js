$("document").ready(function() {
    $('#header').load('header.html'); 
    $('#footer').load('footer.html'); 
    $('#modal1').load('modal.html');

    $('#modal1').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget) // Button that triggered the modal
        let recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        let modal = $(this)
        modal.find('.modal-title').text('Great! Let’s make sure we can contact you! ')
        $('#contact_form').on('submit', function(e){
            let postData = $(this).serializeArray();
            let formURL = $(this).attr('action');
            let $completeForm = $newdiv1 = $( "<div class='text-center'><img src='img/completeImg.png' /></div>" );
            $.ajax({
                type: "GET",
                url: 'modal-form.php',
                data: postData,
                success: function(data, textStatus, jqXHR){
                    $('#exampleModal .modal-header .modal-title').html('Got it! We will let you know as soon as we have an update.');
                    $('#exampleModal .modal-header .modal-subTitle').remove();
                    $('#exampleModal .modal-body').html(data);
                    $('#exampleModal .modal-body').append( $completeForm );
                    // $('#submit').remove();
                    $('#submit').html('Return');
                    $('#submit').attr('data-dismiss','modal');
                    $('#submit').attr('aria-label', 'Close');
                },
                error: function(jqXHR, status, error){
                    console.log(status + ": " + error);
                }
            });
            e.preventDefault();
        });
        $('#submit').on('click', function(){
            $('#contact_form').submit();
        });
    });
});

