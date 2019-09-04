
(($) => {
    $.fn.slide = function (options) {
        const $this = this;
        const $parent = $this.parent();
        let $current = null;
        let anchorX = 0;
        let anchorY = 0;

        $this.addClass("slide").mousedown(function (event) {
            $current = $(this);
            anchorX = event.screenX - ($current.data('origin-X') || 0);
        });

        $(document).mousemove(event => {
            if ($current) {
                const currentX = event.screenX - anchorX;
                let newX;
                let checkLeft = currentX > 0;
                let checkRight = currentX < $parent.width() - $this.width();

                if (checkRight && checkLeft){
                    newX = currentX;
                } else {
                    newX = checkRight ? 1 : $parent.width() - $this.width() - 1;
                }

                $current.css({
                    'margin-left': newX + 'px',
                });

                if ($.isPlainObject(options) && $.isFunction(options.change)) {
                    options.change.call($current, newX, anchorY);
                }

                $('.result').empty().append('<p>Searching for id: ' + newX + '</p>');

                let searchTerm = newX;
                let url = 'http://pokeapi.co/api/v2/pokemon/';
                let SlideResultContainer = $(".result");
                let result = {};

                if (searchTerm) {
                    $.getJSON(url + searchTerm, (data) => {
                        result.name = data.name;
                        result.id = data.id;
                        result.image = data.sprites.front_default;
                    }).done(() => {
                        SlideResultContainer.empty().append('<p> Name: ' + result.name + '<br>ID: ' +
                                result.id + '</p>');
                        SlideResultContainer.append($('<img>').attr({ src: result.image }));
                    }
                      );
                }
            }
        }).mouseup(() => {
            $current = null;
        });

        return $this;
    };
})(jQuery);
