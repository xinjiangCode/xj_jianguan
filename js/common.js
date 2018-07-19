
// $('.title_ul li').find('img').attr('src', '../images/title'+index+'.png');



$(function () {

    // $('.title_ul li').removeClass('tilte_current');

    $('.title_ul li').each(function (idx,item) {
        if(idx== sessionStorage.getItem("topTitleIndex")){
            $(item).find('img').attr('src', './images/title'+(idx+1)+''+(idx+1)+'.png');
            $(item).addClass('tilte_current');
        }
    })

    $(this).addClass('tilte_current');

})