$(function() {
    var location = window.location.pathname;
    var sectionsPath = '/docs/sections/';
    var container = $('article');

    $.get(sectionsPath + 'overview.html', function(data) {

        container.append(data);

        Prism.highlightAll();

    }).fail(function(jqXHR, txtStatus, error) {
        console.log(error);
    });

    var menuBar = $('.menu-bar');

    menuBar.on('click', 'a', function(event) {
        event.preventDefault();

        var fileName = $(this).attr('href');

        $.get(sectionsPath + fileName, function(data) {

            container.empty().append(data);

            var codeSampleContainers = container.find('.sample-container');

            codeSampleContainers.each(function() {
                var container = $(this);
                var html = container.html();

                container.next('.code-sample').find('code').text(html);
            });

            Prism.highlightAll();

        }).fail(function(jqXHR, txtStatus, error) {
            console.log(error);
        });

    });

});
