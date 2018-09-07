/* view products button on homepage click event to link to products page */
/* jQuery(function ($) {
    $(document).ready(function () {
        $(".et_pb_fullwidth_header_0 .et_pb_button_one.et_pb_button").on("click", function () {
            window.location.href = 'http://127.0.0.1:8080/wordpress/products/';
            return false;
        });
    });
}); */

/* inject class attributes to different elements
*slow	2s
*slower	3s
*/
jQuery(function ($) {
    //H1 tag 
    $("#homeBanner .et_pb_module_header ").addClass("wow zoomIn slower");
    //view products btn
    $("#homeBanner .et_pb_button_one ").addClass("wow bounceInUp delay-3s");
    //subheading
    $("#homeBanner .et_pb_fullwidth_header_subhead ").addClass("wow bounceInRight delay-2s");
    //services header
    $("#services .et_pb_module_header ").addClass("wow zoomIn slower");
    //products header
    $("#products .et_pb_module_header ").addClass("wow zoomIn slower");
    //media gallery header
    $("#media .et_pb_module_header ").addClass("wow zoomIn slower");
    //contact header
    $("#contact .et_pb_module_header ").addClass("wow zoomIn slower");

});

