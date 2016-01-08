(function($) {
  $.fn.dropdown = function(options) {
    // mapped element
    var element = this;

    // instance
    var dropdown = new Object;

    // default settings
    dropdown.defaults = {
      modifier: 'dropdown--open'
    };

    // settings
    var settings = $.extend({}, dropdown.defaults, options);

    // toggle
    dropdown.toggle = function(element) {
      // call jquery toggle class
      $(element).toggleClass(settings.modifier);
    };

    // constructor
    dropdown.initialize = function() {
      // click listener
      $(element).on('click', function(event) {
        // call toggle
        dropdown.toggle($(event.currentTarget));
      });
    };

    // call
    dropdown.initialize();
  };
}(jQuery));

// initialize dropdown
$(document).ready(function() {
  $('.dropdown').dropdown();
});
