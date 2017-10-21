/**
 * @author Batch Themes Ltd.
 */
(function() {
    'use strict';

    $(function() {

        var config = { "name": "styleguide", "theme": "palette-5", "palette": { "textColor": "#262932", "backgroundColor": "#ffffff", "highlightColor": "#d9534f", "borderColor": "#ececec", "hoverColor": "#e6e6e6", "oddColor": "#f2f2f2", "evenColor": "#ffffff", "leftSidebarBackgroundColor": "#3c414f", "leftSidebarBorderColor": "#3c414f", "leftSidebarTextColor": "#ffffff", "leftSidebarTitleColor": "#ffffff", "leftSidebarSidelineColor": "#d9534f", "leftSidebarHoverBackgroundColor": "#313540", "leftSidebarHoverTextColor": "#ffffff", "navbarBackgroundColor": "#ffffff", "navbarTextColor": "#262932", "navbarBorderColor": "#d9d9d9", "codeBackgroundColor": "#d9d9d9", "codeTextColor": "#d9534f", "floatingLabelsBorderColor": "#d9d9d9", "vectorMapTextColor": "#cccccc", "vectorMapBackgroundColor": "#e6e6e6", "vectorMapHoverBackgroundColor": "#d9d9d9", "horizontalNavigation1NavbarBackgroundColor": "#3c414f", "horizontalNavigation1NavbarTextColor": "#ffffff", "horizontalNavigation1NavbarBorderColor": "#3c414f", "horizontalNavigation1BackgroundColor": "#474d5d", "horizontalNavigation1TextColor": "#ffffff", "horizontalNavigation1BorderColor": "#474d5d", "horizontalNavigation1DropdownBackgroundColor": "#474d5d", "horizontalNavigation1DropdownTextColor": "#ffffff", "horizontalNavigation2NavbarBackgroundColor": "#52596c", "horizontalNavigation2NavbarTextColor": "#ffffff", "horizontalNavigation2NavbarBorderColor": "#52596c", "horizontalNavigation2BackgroundColor": "#52596c", "horizontalNavigation2TextColor": "#ffffff", "horizontalNavigation2BorderColor": "#52596c", "horizontalNavigation2DropdownBackgroundColor": "#52596c", "horizontalNavigation2DropdownTextColor": "#ffffff", "horizontalNavigation3NavbarBackgroundColor": "#3c414f", "horizontalNavigation3NavbarTextColor": "#ffffff", "horizontalNavigation3NavbarBorderColor": "#3c414f", "horizontalNavigation3BackgroundColor": "#474d5d", "horizontalNavigation3TextColor": "#ffffff", "horizontalNavigation3BorderColor": "#474d5d", "horizontalNavigation3DropdownBackgroundColor": "#474d5d", "horizontalNavigation3DropdownTextColor": "#ffffff", "megaMenuBackgroundColor": "#f9f9f9", "megaMenuTextColor": "#262932", "megaMenuBorderColor": "#e6e6e6", "megaMenuNavbarBackgroundColor": "#3c414f", "megaMenuNavbarTextColor": "#262932", "megaMenuNavbarBorderColor": "#3c414f", "rightSidebarTextColor": "#262932", "rightSidebarBackgroundColor": "#ffffff", "rightSidebarBorderColor": "#d9d9d9", "fullsizeBackgroundImageBackgroundColor": "#262932", "fullsizeBackgroundImageTextColor": "#f5f5f5" }, "layout": "horizontal-navigation-3", "direction": "ltr", "colors": { "primary": "#0275d8", "default": "#5bc0de", "success": "#5cb85c", "info": "#00aced", "warning": "#f0ad4e", "danger": "#d9534f", "light": "#f5f5f5", "dark": "#262932", "white": "#ffffff", "black": "#000000" } };
        $('body').attr('data-layout', config.layout);
        $('body').attr('data-palette', config.theme);
        $('body').attr('data-direction', config.direction);

        var items = [{
            text: 'Learn AngularJS',
            done: false
        }, {
            text: 'Check out branch from github',
            done: false
        }, {
            text: 'Build Android app',
            done: false
        }, {
            text: 'Call client',
            done: false
        }];

        var drawList = function() {
            var str = '';
            for (var i in items) {
                str += '<li class="list-group-item">';
                str += '<label class="c-input c-checkbox">';
                str += '<input type="checkbox" data-index="' + i + '" class="task">';
                str += '<span class="c-indicator c-indicator-warning"></span>';
                str += '<span class="text">' + items[i].text + '</span> ';
                str += '</label>';
                str += '</li>';
            }
            $('.tasks').html(str);
        };

        var count = function() {

            var completed = 0;
            var remaining = 0;
            var total = 0;

            items.forEach(function(val, key) {
                if (val.done === true) {
                    completed++;
                }
                if (val.done === false) {
                    remaining++;
                }
                total = completed + remaining;
            });
            var text = remaining === 1 ? '1 task to do' : remaining + ' tasks to do';
            $('.activity-widget-2 .total').text(text);

        };

        count();
        drawList();

        $('.activity-widget-2 .form1').on('submit', function(e) {
            e.preventDefault();
            return false;
        })
        $('.activity-widget-2 .form-control').on('change', function(e) {
            e.preventDefault();
            var text = $(this).val();
            if (!text) {
                return false;
            }
            var task = {
                'text': text,
                'done': false
            };
            items.push(task);
            count();
            drawList();
            $(this).val('').blur();
            $('.activity-widget-2 .form1 .help-block').addClass('hidden');
            return false;
        });
        $(document).on('click', '.task', function(e) {
            e.preventDefault();
            var index = $(this).data('index');
            console.log('.task');
            console.log('index', index);
            items.splice(items.indexOf(index), 1);
            console.log('items', items);
            count();
            drawList();
            $('.activity-widget-2 .form1 .help-block').addClass('hidden');
            return false;
        });


    });

})();
