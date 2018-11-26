$("document").ready(function() {
    $('#header').load('header.html'); 
    $('#footer').load('footer.html'); 
    $('#modal1').load('modal.html');
    $('#modal-GetStarted').load('modal-getStarted.html');

    $('#modal1').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget) // Button that triggered the modal
        let titleVal = button.data('title') // Extract info from data-* attributes
        let subTitleVal = button.data('subtitle')
        let tesval = button.data('val')
        let nameBtn = button.data('namebtn')
        
        let modal = $(this)
        modal.find('#exampleModal .modal-title').text(titleVal)
        modal.find('#exampleModal .modal-subTitle').text(subTitleVal)
        modal.find('#test').attr('value', tesval )
        modal.find('#submit').text(nameBtn)

        $('#contact_form').on('submit', function(e){
            let postData = $(this).serializeArray();
            let formURL = $(this).attr('action');
            console.log("asdkjflasdf");
            // $.ajax({
            //     type: "POST",
            //     url: formURL,
            //     data: postData,

            //     success: function(data, textStatus, jqXHR){
            //         // $('#exampleModal .modal-header .modal-title').html('Got it! We will let you know as soon as we have an update.');
            //         // $('#exampleModal .modal-header .modal-subTitle').remove();
            //         // $('#exampleModal .modal-body').html(data);
            //         // $('#exampleModal .modal-body').append( $completeForm );
            //         // $('#submit').remove();
            //         // $('#submit').html('Return');
            //         // $('#submit').attr('data-dismiss','modal');
            //         // $('#submit').attr('aria-label', 'Close');
            //         // $('#exampleModal form :input').val("");
            //     },
            //     error: function(jqXHR, status, error){
            //         console.log(status + ": " + error);
            //     }
            // });
            // e.preventDefault();
        });
        $('#submit').on('click', function(){
            $('#thankYou').show();
            $('#thankYouImg').show();
            $('#return').show();
            $('#contact_form').hide();
            $('#exampleModalLabel').hide();
            $('#modalSubTitle').hide();
        });
    });
    $('body').on('hidden.bs.modal', '.modal', function () {
        $('#exampleModal form :input').val("");
        $( "#1" ).prop( "checked", false ); 
        $( "#2" ).prop( "checked", false ); 
        $( "#3" ).prop( "checked", false );   
        $('#thankYou').hide();
        $('#thankYouImg').hide();
        $('#return').hide();
        $('#contact_form').show();
        $('#exampleModalLabel').show();
        $('#modalSubTitle').show();
    });
    
    $('#submit1').on('click', function(){
        $('#thankYou').show();
        $('#thankYouImg1').show();
        $('#return1').show();
        $('#contact_form').hide();
        $('#exampleModalLabel').hide();
        $('#modalSubTitle').hide();
    });

    // Get Started PopUP
    $('#modal-GetStarted').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget) // Button that triggered the modal
        let recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        let modal = $(this)
        // modal.find('.modal-title').text('Request an appointment')
        // modal.find('.modal-subTitle').text('We’ll send someone over to your home to help you out!')
        // modal.find('#submit1').text('Request')
        
        $('#contact_form1').on('submit', function(e){
            let postData = $(this).serializeArray();
            let formURL = $(this).attr('action');
            let $completeForm = $newdiv1 = $( "<div class='text-center'><img src='img/completeImg.png' /></div>" );
            console.log("Helloooooo");
        //     // $.ajax({
        //     //     type: "POST",
        //     //     url: formURL,
        //     //     data: postData,
        //     //     success: function(data, textStatus, jqXHR){
        //     //         $('#exampleModal .modal-header .modal-title').html('Got it! We will let you know as soon as we have an update.');
        //     //         $('#exampleModal .modal-header .modal-subTitle').remove();
        //     //         $('#exampleModal .modal-body').html(data);
        //     //         $('#exampleModal .modal-body').append( $completeForm );
        //     //         // $('#submit').remove();
        //     //         $('#submit').html('Return');
        //     //         $('#submit').attr('data-dismiss','modal');
        //     //         $('#submit').attr('aria-label', 'Close');
        //     //     },
        //     //     error: function(jqXHR, status, error){
        //     //         console.log(status + ": " + error);
        //     //     }
        //     // });
        //     // e.preventDefault();
        });
        $('#submit1').on('click', function(){
            $('#thankYou2').show();
            $('#thankYou22').show();
            $('#return1').show();
            $('#contact_form1').hide();
            $('#modalGetStartedLabel').hide();
            $('#modalSubTitle1').hide();
        });
    });
    //For Get Started
    $('body').on('hidden.bs.modal', '.modal', function () {
        $('#modalGetStarted form :input').val("");
        $( "#11" ).prop( "checked", false ); 
        $( "#22" ).prop( "checked", false ); 
        $( "#33" ).prop( "checked", false );   
        $('#thankYou2').hide();
        $('#thankYou22').hide();
        $('#return1').hide();
        $('#contact_form1').show();
        $('#modalGetStartedLabel').show();
        $('#modalSubTitle1').show();
    });
});

