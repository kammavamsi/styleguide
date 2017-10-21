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

        $('[data-toggle="tooltip"]').tooltip();

        $('[data-toggle="popover"]').popover();

        $('.toolbar-icons a').on('click', function(event) {
            event.preventDefault();
        });

        $('div[data-toolbar="user-options"]').toolbar({
            content: '#user-options',
            position: 'top',
        });

        $('div[data-toolbar="transport-options"]').toolbar({
            content: '#transport-options',
            position: 'top',
        });

        $('div[data-toolbar="transport-options-o"]').toolbar({
            content: '#transport-options-o',
            position: 'right',
            event: 'click',
            hideOnClick: true,
        });

        $('div[data-toolbar="content-option"]').toolbar({
            content: '#transport-options',
        });

        $('div[data-toolbar="position-option"]').toolbar({
            content: '#transport-options',
            position: 'right',
        });

        $('div[data-toolbar="style-option"]').toolbar({
            content: '#transport-options',
            position: 'right',
            style: 'primary',
        });

        $('div[data-toolbar="animation-option"]').toolbar({
            content: '#transport-options',
            position: 'right',
            style: 'primary',
            animation: 'flyin'
        });

        $('div[data-toolbar="event-option"]').toolbar({
            content: '#transport-options',
            position: 'right',
            style: 'primary',
            event: 'click',
        });

        $('div[data-toolbar="hide-option"]').toolbar({
            content: '#transport-options',
            position: 'right',
            style: 'primary',
            event: 'click',
            hideOnClick: true
        });

        $('#link-toolbar').toolbar({
            content: '#user-options',
            position: 'top',
            event: 'click',
            adjustment: 35
        });

        $('div[data-toolbar="set-01"]').toolbar({
            content: '#set-01-options',
            position: 'top',
        });

        $('div[data-toolbar="set-02"]').toolbar({
            content: '#set-02-options',
            position: 'left',
        });

        $('div[data-toolbar="set-03"]').toolbar({
            content: '#set-03-options',
            position: 'right',
        });

        $('div[data-toolbar="set-04"]').toolbar({
            content: '#set-04-options',
            position: 'right',
        });

        $("#transport-options-2").find('a').on('click', function() {
            var $this = $(this);
            var $button = $('div[data-toolbar="transport-options-2"]');
            var $newClass = $this.find('i').attr('class').substring(3);
            var $oldClass = $button.find('i').attr('class').substring(3);
            if ($newClass !== $oldClass) {
                $button.find('i').animate({
                    top: "+=50",
                    opacity: 0
                }, 200, function() {
                    $(this).removeClass($oldClass).addClass($newClass).css({
                        top: "-=100",
                        opacity: 1
                    }).animate({
                        top: "+=50"
                    });
                });
            }

        });

        $('div[data-toolbar="transport-options-2"]').toolbar({
            content: '#transport-options-2',
            position: 'top',
        });

        /*
        $('.modal').each(function(index) {
            $(this).on('show.bs.modal', function(e) {
                var open = $(this).attr('data-easein');
                if (open == 'shake') {
                    $('.modal-dialog').velocity('callout.' + open);
                } else if (open == 'pulse') {
                    $('.modal-dialog').velocity('callout.' + open);
                } else if (open == 'tada') {
                    $('.modal-dialog').velocity('callout.' + open);
                } else if (open == 'flash') {
                    $('.modal-dialog').velocity('callout.' + open);
                } else if (open == 'bounce') {
                    $('.modal-dialog').velocity('callout.' + open);
                } else if (open == 'swing') {
                    $('.modal-dialog').velocity('callout.' + open);
                } else {
                    $('.modal-dialog').velocity('transition.' + open);
                }

            });
        });
		*/

    });
})();
