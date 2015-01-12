/**
 * Created by jayeshkawli on 1/11/15.
 */
$('#clock-one-title, #clock-two-title, #clock-three-title, #clock-four-title, #clock-five-title, #clock-six-title').jrumble({
    speed: 50
});

$('#clock-one-title, #clock-two-title, #clock-three-title, #clock-four-title, #clock-five-title, #clock-six-title').hover(function(){
    $(this).trigger('startRumble');
}, function(){
    $(this).trigger('stopRumble');
});
