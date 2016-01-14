(function($) {
  $.fn.navbar = function(options) {
    // mapped element
    var element = this;

    // instance
    var navbar = new Object;

    // default settings
    navbar.defaults = {
      navbarClass: '.navbar',
      navbarTogglerClass: '.navbar__toggler',
      navbarContainerClass: '.navbar__container'
    };

    // settings
    var settings = $.extend({}, navbar.defaults, options);

    // toggle
    navbar.toggle = function(element) {
      // call jquery toggle class
      $(element).parents(settings.navbarClass).find(settings.navbarContainerClass).toggle();
    };

    // constructor
    navbar.initialize = function() {
      // click listener
      $(element).find(settings.navbarTogglerClass).click(function(event) {
        navbar.toggle(this);
      });
    };

    // call
    navbar.initialize();
  };
}(jQuery));

// initialize navbar
$(document).ready(function() {
  $('.navbar').navbar();
});
