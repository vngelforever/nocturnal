var unlock_location_input = document.getElementById("unlock_location_input");

$('document').ready(function(){

    // $('#button_event').click(function(){
    //     $('#nocturnal_description').toggle(3000);
    // })

    $('#find_out_more_button').click(function(){
        $('#event_description').show(2000);  
        $('#find_out_more_button').hide(1500);
        $('.find_out_more_heading').hide(1500)
    })

    $('#find_out_more_button_2').click(function(){
        $('#event_description_2').show(2000);  
        $('#find_out_more_button_2').hide(1500);
        $('.find_out_more_heading_2').hide(1500)
    })


    //location drop down
    $('#show-me-button').on("click",function(){
        $('#location-text').toggle(2000)
    })

    //Next for us drop down
    $('#next-for-us-button').on("click",function(){
        $('#next-for-us-text').toggle(2000);
    })

    //Shop drop down
    $('#shop-button').on("click",function(){
        $('#shop-info-label').slideToggle(2000);
        $('#shop-info-button').slideToggle(2000);
    })

    //Social media drop down
    $('#socials-button').on("click",function(){
        $('.socials-icons').toggle(2000);
    })

    //Password
   

})


