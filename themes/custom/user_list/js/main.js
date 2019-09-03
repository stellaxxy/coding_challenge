
(function($){
    let originalArr = [];

    $(document).ready(

        $('.full-name').hover(tooltipHandlerIn, tooltipHandlerOut),
        $('.card-inner').click(flipCard),
        saveOriginalArr(),
        $('.drop-first-op').click(arrangeAlphabetically),
        $('.drop-second-op').click(sortByTime),
        arrangeAlphabetically(),
    )

    function tooltipHandlerIn(){
        let phone = $(this).data('phone');
        let tooltipText = $('<span></span>').text(`Tel: ${phone}`).addClass('tooltip-text');
        $(this).append(tooltipText);
    }

    function tooltipHandlerOut(){
        $(this).find($('.tooltip-text')).remove();
    }

    function arrangeAlphabetically(){
        let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        for(let index = 0; index < letters.length; index++){
            if($(`.card.${letters[index]}`).length > 0){
                if($(`.${letters[index]}-container`).length === 0){
                    let heading = $('<h3>').text(letters[index].toUpperCase());
                    let container = $('<div>').addClass(`${letters[index]}-container alpha-container`).append($(heading));
                    $(container).append($(`.card.${letters[index]}`));
                    $('.rows-container').append($(container));
                } else {
                    $(`.${letters[index]}-container`).append($(`.card.${letters[index]}`));
                }
            }
        }
        $('.rows-container').css('justify-content', 'center');
    }

    function flipCard(){
        $(this).toggleClass('rotate-card');
        setTimeout(()=>{$(this).find($('.card-front')).toggleClass('hide-front')}, 200);
    }

    function saveOriginalArr(){
        let allCards = $('.card');
        originalArr = allCards;
    }

    function sortByTime(){
        $('.alpha-container').remove();
        for(let index = 0; index < originalArr.length; index++){
            $('.rows-container').append(originalArr[index]);
        }
        $('.rows-container').css('justify-content', 'stretch');
        $('.full-name').hover(tooltipHandlerIn, tooltipHandlerOut);
        $('.card-inner').click(flipCard)
    }
})(jQuery);
