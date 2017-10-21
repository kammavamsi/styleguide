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

        var colors = config.colors;
        var palette = config.palette;

        $('.easy-pie-chart-1').easyPieChart({
            barColor: colors.success,
            size: 200,
            trackColor: palette.oddColor,
            scaleColor: false,
            animate: true,
            lineWidth: 10,
            lineCap: 'square'
        });
        $('.easy-pie-chart-2').easyPieChart({
            barColor: colors.warning,
            size: 200,
            trackColor: palette.oddColor,
            scaleColor: false,
            animate: true,
            lineWidth: 10,
            lineCap: 'round'
        });
        $('.easy-pie-chart-3').easyPieChart({
            barColor: colors.danger,
            size: 200,
            trackColor: palette.oddColor,
            scaleColor: false,
            animate: true,
            lineWidth: 10,
            lineCap: 'square'
        });

        $('.easy-pie-chart-4').easyPieChart({
            barColor: colors.info,
            size: 150,
            trackColor: palette.oddColor,
            scaleColor: false,
            animate: true,
            lineWidth: 10,
            lineCap: 'round'
        });
        $('.easy-pie-chart-5').easyPieChart({
            barColor: colors.primary,
            size: 150,
            trackColor: palette.oddColor,
            scaleColor: false,
            animate: true,
            lineWidth: 10,
            lineCap: 'square'
        });
        $('.easy-pie-chart-6').easyPieChart({
            barColor: colors.success,
            size: 150,
            trackColor: palette.oddColor,
            scaleColor: false,
            animate: true,
            lineWidth: 10,
            lineCap: 'round'
        });

        $('.easy-pie-chart-7').easyPieChart({
            barColor: colors.warning,
            size: 100,
            trackColor: palette.oddColor,
            scaleColor: false,
            animate: true,
            lineWidth: 10,
            lineCap: 'square'
        });
        $('.easy-pie-chart-8').easyPieChart({
            barColor: colors.danger,
            size: 100,
            trackColor: palette.oddColor,
            scaleColor: false,
            animate: true,
            lineWidth: 10,
            lineCap: 'round'
        });
        $('.easy-pie-chart-9').easyPieChart({
            barColor: colors.info,
            size: 100,
            trackColor: palette.oddColor,
            scaleColor: false,
            animate: true,
            lineWidth: 10,
            lineCap: 'square'
        });

    });


})();
