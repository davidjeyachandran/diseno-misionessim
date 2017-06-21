/* SMOOTH SCROLLIG
 ========================================================*/

(function (jQuery) {
    if(!device.mobile() && !device.tablet()){

        jQuery(document).ready(function () {
            jQuery.srSmoothscroll({
                step: 150,
                speed: 500
            });
        });
    }
})(jQuery);