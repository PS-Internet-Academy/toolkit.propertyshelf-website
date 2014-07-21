function step1(){
    if($('.step1').length>0){
    $('.step1next').click(function(){
        $('.step1').toggle();
        $('.step2').fadeToggle();
    });
    }
}

function step2(){
    if($('.step2').length>0){
    $('.step2next').click(function(){
        $('.step2').toggle();
        $('.step3').fadeToggle();
    });
    $('.step2prev').click(function(){
        $('.step2').toggle();
        $('.step1').fadeToggle();
    });
    }   
}

function step3(){
    if($('.step3').length>0){
    $('.step3next').click(function(){
        $('.step3').toggle();
        $('.step4').fadeToggle();
    });
    $('.step3prev').click(function(){
        $('.step3').toggle();
        $('.step2').fadeToggle();
    });
    }
}

function step4(){
    if($('.step4').length>0){
    $('.step4prev').click(function(){
        $('.step3').toggle();
        $('.step4').fadeToggle();
    });
    }
}

$(document).ready(function(){
    
    if($('.template-view.portaltype-collective-cover-content').length>0){
        $('.step2').hide();
        $('.step3').hide();
        $('.step4').hide();
    
    if ($(window).width() < 842) {
            $( ".step1" ).hide();
        }
    
    $(window).resize(function(){
        if ($(window).width() < 842) {
            $( ".step1" ).hide();
            $( ".step2" ).hide();
            $( ".step3" ).hide();
            $( ".step4" ).hide();
        }
        else{
            $( ".step1" ).show(); 
            $( ".step2" ).hide();
            $( ".step3" ).hide();
            $( ".step4" ).hide();
        }
    });
    
        if($('.step1').length>0){       
            step1();
            step2();
            step3();
            step4();
        }
    }
});