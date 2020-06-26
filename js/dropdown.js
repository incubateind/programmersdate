/*
  * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
  * Open source under the BSD License.
  * Copyright Ã‚Â© 2008 George McGinley Smith
  * All rights reserved.
  * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
  */

(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], function ($) {
      return factory($);
    });
  } else if (typeof module === "object" && typeof module.exports === "object") {
    exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {

  // Preserve the original jQuery "swing" easing as "jswing"
  $.easing['jswing'] = $.easing['swing'];

  var pow = Math.pow,
      sqrt = Math.sqrt,
      sin = Math.sin,
      cos = Math.cos,
      PI = Math.PI,
      c1 = 1.70158,
      c2 = c1 * 1.525,
      c3 = c1 + 1,
      c4 = 2 * PI / 3,
      c5 = 2 * PI / 4.5;

  // x is the fraction of animation progress, in the range 0..1
  function bounceOut(x) {
    var n1 = 7.5625,
        d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + .75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + .9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + .984375;
    }
  }

  $.extend($.easing, {
    def: 'easeOutQuad',
    swing: function (x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function (x) {
      return x * x;
    },
    easeOutQuad: function (x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function (x) {
      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function (x) {
      return x * x * x;
    },
    easeOutCubic: function (x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function (x) {
      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function (x) {
      return x * x * x * x;
    },
    easeOutQuart: function (x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function (x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function (x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function (x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function (x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function (x) {
      return 1 - cos(x * PI / 2);
    },
    easeOutSine: function (x) {
      return sin(x * PI / 2);
    },
    easeInOutSine: function (x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function (x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function (x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function (x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function (x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function (x) {
      return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
    },
    easeInBack: function (x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function (x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function (x) {
      return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function (x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function (x) {
      return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
    }
  });
});; // Custom Easing


///*
// * raf.js
// * https://github.com/ngryman/raf.js
// *
// * original requestAnimationFrame polyfill by Erik MÃƒÂ¶ller
// * inspired from paul_irish gist and post
// *
// * Copyright (c) 2013 ngryman
// * Licensed under the MIT license.
// */
//(function (window) {
//  var lastTime = 0,
//      vendors = ['webkit', 'moz'],
//      requestAnimationFrame = window.requestAnimationFrame,
//      cancelAnimationFrame = window.cancelAnimationFrame,
//      i = vendors.length;
//
//  // try to un-prefix existing raf
//  while (--i >= 0 && !requestAnimationFrame) {
//    requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
//    cancelAnimationFrame = window[vendors[i] + 'CancelRequestAnimationFrame'];
//  }
//
//  // polyfill with setTimeout fallback
//  // heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
//  if (!requestAnimationFrame || !cancelAnimationFrame) {
//    requestAnimationFrame = function (callback) {
//      var now = +Date.now(),
//          nextTime = Math.max(lastTime + 16, now);
//      return setTimeout(function () {
//        callback(lastTime = nextTime);
//      }, nextTime - now);
//    };
//
//    cancelAnimationFrame = clearTimeout;
//  }
//
//  // export to window
//  window.requestAnimationFrame = requestAnimationFrame;
//  window.cancelAnimationFrame = cancelAnimationFrame;
//})(window);

///**
// * Generate approximated selector string for a jQuery object
// * @param {jQuery} obj  jQuery object to be parsed
// * @returns {string}
// */
//Materialize.objectSelectorString = function (obj) {
//  var tagStr = obj.prop('tagName') || '';
//  var idStr = obj.attr('id') || '';
//  var classStr = obj.attr('class') || '';
//  return (tagStr + idStr + classStr).replace(/\s/g, '');
//};
//
//// Unique Random ID
//Materialize.guid = function () {
//  function s4() {
//    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//  }
//  return function () {
//    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
//  };
//}();
//
///**
// * Escapes hash from special characters
// * @param {string} hash  String returned from this.hash
// * @returns {string}
// */
//Materialize.escapeHash = function (hash) {
//  return hash.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
//};
//
//Materialize.elementOrParentIsFixed = function (element) {
//  var $element = $(element);
//  var $checkElements = $element.add($element.parents());
//  var isFixed = false;
//  $checkElements.each(function () {
//    if ($(this).css("position") === "fixed") {
//      isFixed = true;
//      return false;
//    }
//  });
//  return isFixed;
//};
//
///**
// * Get time in ms
// * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
// * @type {function}
// * @return {number}
// */
//var getTime = Date.now || function () {
//  return new Date().getTime();
//};
//
///**
// * Returns a function, that, when invoked, will only be triggered at most once
// * during a given window of time. Normally, the throttled function will run
// * as much as it can, without ever going more than once per `wait` duration;
// * but if you'd like to disable the execution on the leading edge, pass
// * `{leading: false}`. To disable execution on the trailing edge, ditto.
// * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
// * @param {function} func
// * @param {number} wait
// * @param {Object=} options
// * @returns {Function}
// */
//Materialize.throttle = function (func, wait, options) {
//  var context, args, result;
//  var timeout = null;
//  var previous = 0;
//  options || (options = {});
//  var later = function () {
//    previous = options.leading === false ? 0 : getTime();
//    timeout = null;
//    result = func.apply(context, args);
//    context = args = null;
//  };
//  return function () {
//    var now = getTime();
//    if (!previous && options.leading === false) previous = now;
//    var remaining = wait - (now - previous);
//    context = this;
//    args = arguments;
//    if (remaining <= 0) {
//      clearTimeout(timeout);
//      timeout = null;
//      previous = now;
//      result = func.apply(context, args);
//      context = args = null;
//    } else if (!timeout && options.trailing !== false) {
//      timeout = setTimeout(later, remaining);
//    }
//    return result;
//  };
//};

//// Velocity has conflicts when loaded with jQuery, this will check for it
//// First, check if in noConflict mode
//var Vel;
//if (jQuery) {
//  Vel = jQuery.Velocity;
//} else if ($) {
//  Vel = $.Velocity;
//} else {
//  Vel = Velocity;
//}
//;
(function ($) {

  // Add posibility to scroll to selected option
  // usefull for select for example
  $.fn.scrollTo = function (elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (options) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    };

    // Open dropdown.
    if (options === "open") {
      this.each(function () {
        $(this).trigger('open');
      });
      return false;
    }

    // Close dropdown.
    if (options === "close") {
      this.each(function () {
        $(this).trigger('close');
      });
      return false;
    }

    this.each(function () {
      var origin = $(this);
      var curr_options = $.extend({}, defaults, options);
      var isFocused = false;

      // Dropdown menu
      var activates = $("#" + origin.attr('data-activates'));

      function updateOptions() {
        if (origin.data('induration') !== undefined) curr_options.inDuration = origin.data('induration');
        if (origin.data('outduration') !== undefined) curr_options.outDuration = origin.data('outduration');
        if (origin.data('constrainwidth') !== undefined) curr_options.constrainWidth = origin.data('constrainwidth');
        if (origin.data('hover') !== undefined) curr_options.hover = origin.data('hover');
        if (origin.data('gutter') !== undefined) curr_options.gutter = origin.data('gutter');
        if (origin.data('beloworigin') !== undefined) curr_options.belowOrigin = origin.data('beloworigin');
        if (origin.data('alignment') !== undefined) curr_options.alignment = origin.data('alignment');
        if (origin.data('stoppropagation') !== undefined) curr_options.stopPropagation = origin.data('stoppropagation');
      }

      updateOptions();

      // Attach dropdown to its activator
      origin.after(activates);

      /*
        Helper function to position and resize dropdown.
        Used in hover and click handler.
      */
      function placeDropdown(eventType) {
        // Check for simultaneous focus and click events.
        if (eventType === 'focus') {
          isFocused = true;
        }

        // Check html data attributes
        updateOptions();

        // Set Dropdown state
        activates.addClass('active');
        origin.addClass('active');

        var originWidth = origin[0].getBoundingClientRect().width;

        // Constrain width
        if (curr_options.constrainWidth === true) {
          activates.css('width', originWidth);
        } else {
          activates.css('white-space', 'nowrap');
        }

        // Offscreen detection
        var windowHeight = window.innerHeight;
        var originHeight = origin.innerHeight();
        var offsetLeft = origin.offset().left;
        var offsetTop = origin.offset().top - $(window).scrollTop();
        var currAlignment = curr_options.alignment;
        var gutterSpacing = 0;
        var leftPosition = 0;

        // Below Origin
        var verticalOffset = 0;
        if (curr_options.belowOrigin === true) {
          verticalOffset = originHeight;
        }

        // Check for scrolling positioned container.
        var scrollYOffset = 0;
        var scrollXOffset = 0;
        var wrapper = origin.parent();
        if (!wrapper.is('body')) {
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
            scrollYOffset = wrapper[0].scrollTop;
          }
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
            scrollXOffset = wrapper[0].scrollLeft;
          }
        }

        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          // Dropdown goes past screen on right, force right alignment
          currAlignment = 'right';
        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          // Dropdown goes past screen on left, force left alignment
          currAlignment = 'left';
        }
        // Vertical bottom offscreen detection
        if (offsetTop + activates.innerHeight() > windowHeight) {
          // If going upwards still goes offscreen, just crop height of dropdown.
          if (offsetTop + originHeight - activates.innerHeight() < 0) {
            var adjustedHeight = windowHeight - offsetTop - verticalOffset;
            activates.css('max-height', adjustedHeight);
          } else {
            // Flow upwards.
            if (!verticalOffset) {
              verticalOffset += originHeight;
            }
            verticalOffset -= activates.innerHeight();
          }
        }

        // Handle edge alignment
        if (currAlignment === 'left') {
          gutterSpacing = curr_options.gutter;
          leftPosition = origin.position().left + gutterSpacing;
        } else if (currAlignment === 'right') {
          // Material icons fix
          activates.stop(true, true).css({
            opacity: 0,
            left: 0
          });

          var offsetRight = origin.position().left + originWidth - activates.width();
          gutterSpacing = -curr_options.gutter;
          leftPosition = offsetRight + gutterSpacing;
        }

        // Position dropdown
        activates.css({
          position: 'absolute',
          top: origin.position().top + verticalOffset + scrollYOffset,
          left: leftPosition + scrollXOffset
        });

        // Show dropdown
        activates.slideDown({
          queue: false,
          duration: curr_options.inDuration,
          easing: 'easeOutCubic',
          complete: function () {
            $(this).css('height', '');
          }
        }).animate({ opacity: 1 }, { queue: false, duration: curr_options.inDuration, easing: 'easeOutSine' });

        // Add click close handler to document
        setTimeout(function () {
          $(document).on('click.' + activates.attr('id'), function (e) {
            hideDropdown();
            $(document).off('click.' + activates.attr('id'));
          });
        }, 0);
      }

      function hideDropdown() {
        // Check for simultaneous focus and click events.
        isFocused = false;
        activates.fadeOut(curr_options.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        $(document).off('click.' + activates.attr('id'));
        setTimeout(function () {
          activates.css('max-height', '');
        }, curr_options.outDuration);
      }

      // Hover
      if (curr_options.hover) {
        var open = false;
        origin.off('click.' + origin.attr('id'));
        // Hover handler to show dropdown
        origin.on('mouseenter', function (e) {
          // Mouse over
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', function (e) {
          // If hover on origin then to something other than dropdown content, then close
          var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
          if (!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        activates.on('mouseleave', function (e) {
          // Mouse out
          var toEl = e.toElement || e.relatedTarget;
          if (!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        // Click
      } else {
        // Click handler to show dropdown
        origin.off('click.' + origin.attr('id'));
        origin.on('click.' + origin.attr('id'), function (e) {
          if (!isFocused) {
            if (origin[0] == e.currentTarget && !origin.hasClass('active') && $(e.target).closest('.dropdown-content').length === 0) {
              e.preventDefault(); // Prevents button click from moving window
              if (curr_options.stopPropagation) {
                e.stopPropagation();
              }
              placeDropdown('click');
            }
            // If origin is clicked and menu is open, close menu
            else if (origin.hasClass('active')) {
                hideDropdown();
                $(document).off('click.' + activates.attr('id'));
              }
          }
        });
      } // End else

      // Listen to open and close event - useful for select component
      origin.on('open', function (e, eventType) {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);
    });
  }; // End dropdown plugin

  $(document).ready(function () {
    $('.dropdown-button').dropdown();
  });
})(jQuery);;