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

        //first example
        function updatePreview1(c) {
            if (parseInt(c.w) > 0) {
                var rx = xsize / c.w;
                var ry = ysize / c.h;
                $preview1.css({
                    width: Math.round(c.w) + 'px',
                    height: Math.round(c.h) + 'px',
                });
                $pimg1.css({
                    width: Math.round(rx * boundx) + 'px',
                    height: Math.round(ry * boundy) + 'px',
                    marginLeft: '-' + Math.round(rx * c.x) + 'px',
                    marginTop: '-' + Math.round(ry * c.y) + 'px'
                });
            }
        }

        var jcrop_api1,
            boundx1,
            boundy1,
            // Grab some information about the preview pane
            $preview1 = $('#preview-pane-1'),
            $pcnt1 = $('#preview-pane-1 .preview-container'),
            $pimg1 = $('#preview-pane-1 .preview-container img'),
            xsize1 = $pcnt1.width(),
            ysize1 = $pcnt1.height();

        $('#target1').Jcrop({
            onChange: updatePreview1,
            onSelect: updatePreview1,
            //aspectRatio: xsize1 / ysize1
        }, function() {
            // Use the API to get the real image size
            var bounds = this.getBounds();
            var boundx = bounds[0];
            var boundy = bounds[1];
            // Store the API in the jcrop_api variable
            jcrop_api1 = this;
            // Move the preview into the jcrop container for css positioning
            $preview1.appendTo(jcrop_api1.ui.holder);
        });

        //second example
        function updatePreview(c) {
            if (parseInt(c.w) > 0) {
                var rx = xsize / c.w;
                var ry = ysize / c.h;
                $pimg.css({
                    width: Math.round(rx * boundx) + 'px',
                    height: Math.round(ry * boundy) + 'px',
                    marginLeft: '-' + Math.round(rx * c.x) + 'px',
                    marginTop: '-' + Math.round(ry * c.y) + 'px'
                });
            }
        }

        var jcrop_api,
            boundx,
            boundy,
            // Grab some information about the preview pane
            $preview = $('#preview-pane-2'),
            $pcnt = $('#preview-pane-2 .preview-container'),
            $pimg = $('#preview-pane-2 .preview-container img'),
            xsize = $pcnt.width(),
            ysize = $pcnt.height();

        $('#target2').Jcrop({
            onChange: updatePreview,
            onSelect: updatePreview,
            aspectRatio: xsize / ysize
        }, function() {
            // Use the API to get the real image size
            var bounds = this.getBounds();
            boundx = bounds[0];
            boundy = bounds[1];
            // Store the API in the jcrop_api variable
            jcrop_api = this;
            // Move the preview into the jcrop container for css positioning
            $preview.appendTo(jcrop_api.ui.holder);
        });
    });

})();
