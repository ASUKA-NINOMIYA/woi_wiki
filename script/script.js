$(document).ready(function() {
    $('.show_hide_history').click(function() {
        if($('.history').is(":visible") == false) {
            $('.history').css({"display":"table-cell"})
        } else {
            $('.history').css({"display":"none"})
        }
    });
});