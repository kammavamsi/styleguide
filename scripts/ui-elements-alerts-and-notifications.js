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

        $('.btn-notify').on('click', function() {
            var action = $(this).data('action');
            if (action === 'success') {
                $.notify("Access granted", {
                    className: 'success',
                    globalPosition: 'top right',
                    autoHideDelay: 10000,
                });
            } else if (action === 'info') {
                $.notify("Do not press this button", {
                    className: 'info',
                    globalPosition: 'top left',
                    autoHideDelay: 10000,
                });
            } else if (action === 'warn') {
                $.notify("Warning: Self-destruct in 3.. 2..", {
                    className: 'warn',
                    globalPosition: 'bottom left',
                    autoHideDelay: 10000,
                });
            } else if (action === 'error') {
                $.notify("BOOM!", {
                    className: 'error',
                    globalPosition: 'bottom right',
                    autoHideDelay: 10000,
                });
            }
        });

        $('.btn-swal').on('click', function() {
            var action = $(this).data('action');
            if (action === 'basic') {
                swal('The Internet?', 'That thing is still around?');
            }
            if (action === 'auto-close') {
                swal({
                    title: 'Auto close alert!',
                    text: 'I will close in 2 seconds.',
                    timer: 2000
                });
            }
            if (action === 'html') {
                swal({
                    title: 'HTML example',
                    html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags'
                });
            }
            if (action === 'confirm') {
                swal({
                    title: 'Are you sure?',
                    text: 'You will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                    closeOnConfirm: false
                }, function() {
                    swal('Deleted!', 'Your file has been deleted.', 'success');
                });
            }
            if (action === 'cancel') {
                swal({
                    title: 'Are you sure?',
                    text: 'You will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel plx!',
                    confirmButtonClass: 'confirm-class',
                    cancelButtonClass: 'cancel-class',
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function(isConfirm) {
                    if (isConfirm) {
                        swal('Deleted!', 'Your file has been deleted.', 'success');
                    } else {
                        swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                    }
                });
            }
        });

        $('.btn-toast').on('click', function() {
            var type = $(this).data('type')
            if (type === 'success') {
                toastr.options = {
                    positionClass: 'toast-top-right'
                };
                toastr.success('Great idea!');
            }
            if (type === 'warning') {
                toastr.options = {
                    positionClass: 'toast-bottom-right'
                };
                toastr.warning('Warning!');
            }
            if (type === 'danger') {
                toastr.options = {
                    positionClass: 'toast-bottom-left'
                };
                toastr.error('Danger!');
            }
            if (type === 'info') {
                toastr.options = {
                    positionClass: 'toast-top-left'
                };
                toastr.info('Excellent!');
            }
        });

    });

})();
