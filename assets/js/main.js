(function($) {
    "use strict";


    $('select').niceSelect();


    $(".filterDropDown").click(function() {
        $(".filter_option").toggleClass("active")
    })
    $(".close").click(function() {
        setTimeout(function() {
            $(".filter_option").removeClass("active");
        }, 100);
    })

})(jQuery);