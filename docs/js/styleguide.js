$(function() {
    var location = window.location.pathname;
    var sectionsPath = '/docs/sections/';
    var container = $('article');

    $.get(sectionsPath + 'overview.html', function(data) {

        container.append(data);

    }).fail(function(jqXHR, txtStatus, error) {
        console.log(error);
    });

    var menuBar = $('.menu-bar');

    menuBar.on('click', 'a', function(event) {
        event.preventDefault();

        var fileName = $(this).attr('href');

        $.get(sectionsPath + fileName, function(data) {

            container.empty().append(data);

            var html = container.find('.sample-container')[0].innerHTML;
            var htmlCodeContainer = container.find('.language-markup');

            htmlCodeContainer.text(html);

        }).fail(function(jqXHR, txtStatus, error) {
            console.log(error);
        });

    });

});
