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

        var opts1 = {
            lines: 12,
            angle: 0.05,
            lineWidth: 0.44,
            pointer: {
                length: 0.75,
                strokeWidth: 0.035,
                color: palette.darkColor
            },
            limitMax: 'false',
            colorStart: colors.success,
            colorStop: colors.success,
            strokeColor: colors.warning,
            generateGradient: false
        };
        var target1 = document.getElementById('gauge-1');
        var gauge1 = new Gauge(target1).setOptions(opts1);
        gauge1.maxValue = 100;
        gauge1.animationSpeed = 10;
        gauge1.set(50);

        var target4 = document.getElementById('gauge-4');
        var gauge4 = new Gauge(target4).setOptions(opts1);
        gauge4.maxValue = 100;
        gauge4.animationSpeed = 10;
        gauge4.set(50);

        var target7 = document.getElementById('gauge-7');
        var gauge7 = new Gauge(target7).setOptions(opts1);
        gauge7.maxValue = 100;
        gauge7.animationSpeed = 10;
        gauge7.set(50);

        var opts2 = {
            lines: 12,
            angle: 0.05,
            lineWidth: 0.40,
            pointer: {
                length: 0.75,
                strokeWidth: 0.025,
                color: palette.darkColor
            },
            limitMax: 'false',
            colorStart: colors.info,
            colorStop: colors.info,
            strokeColor: palette.hoverColor,
            generateGradient: false
        };
        var target2 = document.getElementById('gauge-2');
        var gauge2 = new Gauge(target2).setOptions(opts2);
        gauge2.maxValue = 100;
        gauge2.animationSpeed = 10;
        gauge2.set(50);

        var target5 = document.getElementById('gauge-5');
        var gauge5 = new Gauge(target5).setOptions(opts2);
        gauge5.maxValue = 100;
        gauge5.animationSpeed = 10;
        gauge5.set(50);

        var target8 = document.getElementById('gauge-8');
        var gauge8 = new Gauge(target8).setOptions(opts2);
        gauge8.maxValue = 100;
        gauge8.animationSpeed = 10;
        gauge8.set(50);

        var opts3 = {
            lines: 12,
            angle: 0.05,
            lineWidth: 0.44,
            pointer: {
                length: 0.75,
                strokeWidth: 0.035,
                color: palette.darkColor
            },
            limitMax: 'false',
            colorStart: colors.danger,
            colorStop: colors.danger,
            strokeColor: '#ffffff',
            generateGradient: false
        };
        var target3 = document.getElementById('gauge-3');
        var gauge3 = new Gauge(target3).setOptions(opts3);
        gauge3.maxValue = 100;
        gauge3.animationSpeed = 50;
        gauge3.set(50);

        var target6 = document.getElementById('gauge-6');
        var gauge6 = new Gauge(target6).setOptions(opts3);
        gauge6.maxValue = 100;
        gauge6.animationSpeed = 50;
        gauge6.set(50);

        var target9 = document.getElementById('gauge-9');
        var gauge9 = new Gauge(target9).setOptions(opts3);
        gauge9.maxValue = 100;
        gauge9.animationSpeed = 50;
        gauge9.set(50);

    });

})();
