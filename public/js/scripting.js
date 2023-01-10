$(window).on('load', function(){
    $('.carevidence').flexslider({
        animation: "slide",
        directionNav: false
    });

    $('.carbrand').flexslider({
        animation: "slide",
        animationLoop: false,
        controlNav: false,
        directionNav: false,
        itemWidth: 200,
        move: 1
    });

    $('.markFlex').flexslider({
        animation: 'slide',
        directionNav: false,
        controlNav: false
    });

    $('.carprev').on('click', function(){
        $(this).parent().find('.flexslider').flexslider('prev');        
        return false;
    });

    $('.carnext').on('click', function(){
        $(this).parent().find('.flexslider').flexslider('next');
        return false;
    });

    $('.gp-tab ul li').on('click', function(){
        indexTab = $(this).attr('data-tab');
        $(this).closest('.gp-tab').find('li').removeClass('activeTab');        
        $(this).addClass('activeTab');
        
        $(this).closest('.gp-tab').find('div[data-panel]').hide();
        $(this).closest('.gp-tab').find('div[data-panel="'+indexTab+'"]').show();        
    });

    $('#searchCar input[type="text"]').on('click', function(){        
        $(this).closest('#searchCar').addClass('openedSearch');
        $('#tabSearchCar').slideDown();
    });

    $(window).on('scroll', function(){
        $('#tabSearchCar').slideUp();
        $('#searchCar').removeClass('openedSearch');
    });

    var movedWrap = 0;
    $('#openMenu').on('click', function(e){
        e.preventDefault();
        if(movedWrap%2 == 0){
            $('.fullWrap').addClass('movedWrap');
            $('header').addClass('movedHeader');
            $('#menupanel').addClass('showSidePanel');
            if( $('#cartpanel').hasClass('showSidePanel') ){
                $('#cartpanel').removeClass('showSidePanel');
                movedWrapCart++;
            }            
        }else{
            $('.fullWrap').removeClass('movedWrap');
            $('header').removeClass('movedHeader');
            $('#menupanel').removeClass('showSidePanel');
        }   
        movedWrap++;     
    });

    var movedWrapCart = 0;
    $('#openCart').on('click', function(e){
        e.preventDefault();
        if(movedWrapCart%2 == 0){
            $('.fullWrap').addClass('movedWrap');
            $('header').addClass('movedHeader');
            $('#cartpanel').addClass('showSidePanel');
            if( $('#menupanel').hasClass('showSidePanel') ){
                $('#menupanel').removeClass('showSidePanel');
                movedWrap++;
            }            
        }else{
            $('.fullWrap').removeClass('movedWrap');
            $('header').removeClass('movedHeader');
            $('#cartpanel').removeClass('showSidePanel');
        }   
        movedWrapCart++;     
    });

    $('#closeCart').on('click', function(e){
        e.preventDefault();
        $('.fullWrap').removeClass('movedWrap');
        $('header').removeClass('movedHeader');
        $('#cartpanel').removeClass('showSidePanel');
        movedWrapCart++;
    });

    if($(window).width() <= 900){
        $( ".switchImg" ).each(function() {
            var slide_mobile = $(this).attr("data-mobile");            
            $(this).attr("src", slide_mobile);
        });
    }else{
        $( ".switchImg" ).each(function() {
            var slide_desk = $(this).attr("data-desktop");
            $(this).attr("src", slide_desk);
        });
    }

    $(window).on('resize', function(){
        if($(window).width() <= 900){
            $( ".switchImg" ).each(function() {
                var slide_mobile = $(this).attr("data-mobile");            
                $(this).attr("src", slide_mobile);
            });
        }else{
            $( ".switchImg" ).each(function() {
                var slide_desk = $(this).attr("data-desktop");
                $(this).attr("src", slide_desk);
            });
        }
    });
    
    showFilter = 0;
    $('#moreFilters').on('click', function(){
        if(showFilter%2 == 0){
            $('.moreFilter').removeClass('hidden');
        }else{
            $('.moreFilter').addClass('hidden');
        }
        showFilter++;
    });

    showFormSearch = 0;
    $('#showFormSearch').on('click', function(){
        if(showFormSearch%2 == 0){            
            $('.moreFilter, #formSearch').removeClass('hidden');
        }else{
            $('.moreFilter, #formSearch').addClass('hidden');
        }
        showFormSearch++;
    });

    $('input[type="range"].interact').on('input', function(){
        newValue = $(this).val();
        $(this).closest('fieldset').find('.changeThis span').html(newValue);

    });

    
    $('.showMoreDetail').on('click', function(){
        if($(this).hasClass('openedDetail')){
            $(this).removeClass('openedDetail').text('+ Dettagli');
        }else{
            $(this).addClass('openedDetail').text('- Dettagli');
        }
        $(this).closest('li').find('.moreDetail').slideToggle();
    });

    $('#editLink').on('click', function(e){
        e.preventDefault();
        $('#editPanel').slideToggle();
    });

    $('#rateLink').on('click', function(){
        if($(this).hasClass('activeChoose')){
            //$(this).removeClass('activeChoose');            
        }else{
            $('.choosingRates span').removeClass('activeChoose');
            $(this).addClass('activeChoose');
            $('#proceed').prop("disabled", false);
            $('#ratePanel').slideDown();
        }
        
    });

    $('#noRate').on('click', function(){
        if($(this).hasClass('activeChoose')){
            //$(this).removeClass('activeChoose');            
        }else{
            $('.choosingRates span').removeClass('activeChoose');
            $(this).addClass('activeChoose');
            $('#proceed').prop("disabled", false);
            $('#ratePanel').slideUp();
            const fancybox = Fancybox.show([
                {
                    src: "<div><h2 class=\"block text-center font-semibold text-lg mb-8\">Sei sicuro di non voler finanziare?</h2><p>Anche con un minimo finanziamento di 5000€ in 24 mesi risparmi 1000€</p><div class=\"flex flex-row justify-between mt-8\"><span class=\"buttonBluDark noRate lg:inline-block block\">No, non voglio fare il finanziamento</span><span class=\"buttonRed yesRate\">Si, voglio fare il finanziamento</span></div></div>",
                    type: "html"
                }
            ]);
        }        
    });

    $('body').on('click', '.noRate', () => {
        Fancybox.close();
        $('.choosingRates span').removeClass('activeChoose');
        $('#ratePanel').slideUp();
        $('#noRate').addClass('activeChoose');
    });

    $('body').on('click', '.yesRate', () => {
        Fancybox.close();
        $('.choosingRates span').removeClass('activeChoose');
        $('#ratePanel').slideDown();
        $('#rateLink').addClass('activeChoose');
    });

    $(window).on('scroll', function(){
        heightHeader = $('header').height();
        if($(window).scrollTop() > 100){
            $('header').addClass('fixed');
            $('.fullWrap').css({'margin-top' : heightHeader+'px'});
        }else{
            $('header').removeClass('fixed');
            $('.fullWrap').css({'margin-top' : '0px'});
        }
    });

    $('#psw2').on('keyup', function(){
        psw2 = $(this).val();
        ps1 = $('#psw1').val();
        if(psw2 != '' && psw2 === ps1){
            $('.feedbackPsw').html('<p class="okNotice"><i class="fa-solid fa-check"></i> Le password coincidono</p>');
        }else if(psw2 != '' && psw2 !== ps1){
            $('.feedbackPsw').html('<p class="errNotice"><i class="fa-solid fa-triangle-exclamation"></i> Le password non coincidono</p>');
        }else if(psw2 == ''){
            $('.feedbackPsw').html('');
        }
    });

    $('.defCnt').on('click', function(){
        $('.optionContact').addClass('hidden');
        $('.defaultContact').removeClass('hidden');
    });

    $('.wappCnt').on('click', function(){
        $('.optionContact').addClass('hidden');
        $('.wappContact').removeClass('hidden');
    });

    $('.openFaq').on('click', function(){
        $(this).closest('.fullFaq').find('.answer').slideToggle();
    });

    
});

$(document).on('click', function(e){
    tabSearch = $('#tabSearchCar');
    inputSearch = $('#searchCar input[type="text"]');

    if( !$(e.target).is(inputSearch) && !$(e.target).is(tabSearch) && $(e.target).closest(tabSearch).length <= 0){
        $('#tabSearchCar').slideUp();
        $('#searchCar').removeClass('openedSearch');
    }
});