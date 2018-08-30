/* view products button on homepage click event to link to products page */
jQuery(function ($) {
    $(document).ready(function () {
        $(".et_pb_fullwidth_header_0 .et_pb_button_one.et_pb_button").on("click", function () {
            window.location.href = 'http://127.0.0.1:8080/wordpress/products/';
            /* By returning false, the event processing will end here.
             * Without the return will link to same url as original click
            */
            return false;
        });
    });
});

/* inject class attributes to different elements*/
jQuery(function ($) {
    //H1 tag 
    $("#homeBanner .et_pb_module_header ").addClass("wow zoomIn");
    //view products btn
    $("#homeBanner .et_pb_button_one ").addClass("wow bounceInUp");
    //subheading
    $("#homeBanner .et_pb_fullwidth_header_subhead ").addClass("wow bounceInRight");


});

