"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

var Random = function () {
    function Random() {
        _classCallCheck(this, Random);
    }

    _createClass(Random, null, [{
        key: "generateBinary",
        value: function generateBinary() {
            var random = Math.random();
            if (random > 0.5) {
                return 1;
            } else {
                return 0;
            }
        }
    }, {
        key: "generate",
        value: function generate(min, max) {
            return Math.floor(Math.random() * max + min);
        }
    }]);

    return Random;
}();

var Binary = function () {
    function Binary(value) {
        _classCallCheck(this, Binary);

        if(value) {
            this.value = value;
        } else {
            this.value = Random.generateBinary();
        }
    }

    _createClass(Binary, [{
        key: "animate",
        value: function animate(ts, leftOffset, topOffset) {
            var div = document.createElement("div");
            $(div).css("font-size", ts + "px");
            $(div).css("top", topOffset * (ts / 2));
            $(div).css("left", leftOffset + "px");
            $(div).text(this.value);
            $(div).addClass("binary");
            $(div).hide();
            $("body").append(div);
            $(div).show().addClass("animated fadeIn").on(animationEnd, this.fadeInEnd);
            return $(div).offset().top;
        }
    }, {
        key: "fadeInEnd",
        value: function fadeInEnd(event) {
            var $binary = $(event.currentTarget);
            $binary.removeClass("animated fadeIn");
            $binary.addClass("animated fadeOut").on(animationEnd, function () {
                $binary.remove();
            });
        }
    }]);

    return Binary;
}();

var BinaryLine = function () {
    function BinaryLine(lO, tS, dS) {
        _classCallCheck(this, BinaryLine);

        this.leftOffset = lO || Random.generate(0, $(document).width());
        this.textSize = tS || Random.generate($(document).width() * 0.008, $(document).width() * 0.012);
        this.documentSize = dS || $(document).height();
    }

    _createClass(BinaryLine, [{
        key: "generate",
        value: function generate(binaryStr) {
            var iterator = 0;
            var size = this.length;
            var fontSize = this.textSize;
            var documentSize = this.documentSize;
            var currentOffset = 0;
            var leftOffset = this.leftOffset;

            var binDigitIdx = 0;

            var interval = setInterval(function () {
                var binary;

                if (currentOffset < documentSize) {
                    if(binaryStr){
                        if(binDigitIdx < binaryStr.length) {
                            binary = new Binary(parseInt(binaryStr[binDigitIdx]));
                        } else {
                            binDigitIdx = 0;
                            binary = new Binary(parseInt(binaryStr[binDigitIdx]));
                        }
                    }
                    else {
                        binary = new Binary();
                    }
                    currentOffset = binary.animate(fontSize, leftOffset, iterator);
                    iterator++;
                } else {
                    clearInterval(interval);
                }
            }, 80);
        }
    }]);

    return BinaryLine;
}();

var BinaryAnimation = function () {
    function BinaryAnimation() {
        _classCallCheck(this, BinaryAnimation);
    }

    _createClass(BinaryAnimation, [{
        key: "start",
        value: function start() {
            var obj_map = {};
            var idx = 0;
            var interval = setInterval(function () {
                obj_map[idx] = (new BinaryLine().generate("111111111111111111111111111"));
                idx++;

                if(idx > 5) {
                    $(".binary").remove();
                    while (idx >= 0) {
                        delete obj_map[idx];
                        idx--;
                    }
                }
            }, 2000);

        }
    }]);

    return BinaryAnimation;
}();

new BinaryAnimation().start();