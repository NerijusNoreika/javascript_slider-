'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider(id, time, controls) {
        _classCallCheck(this, Slider);

        time === null ? this.time = 300 : this.time = time;
        id === null ? this.id = 'javascript-slider' : this.id = id;
        controls === null ? this.controls = false : this.controls = controls;
        this.run();
    }

    _createClass(Slider, [{
        key: 'run',
        value: function run() {
            var mainContainer = document.getElementById(this.id);

            if (!mainContainer) {
                console.error('There is no main container. Fetching by \'' + this.id + '\' id, got: ' + mainContainer + ' ');
                throw 'Wrong container id';
            }

            var imageCount = mainContainer.children.length;
            var images = mainContainer.children;
            var index = 0;
            images[index].classList.add('active');
            setInterval(function () {
                for (var i = 0; i < imageCount; i++) {
                    if (images[i] == images[index]) {
                        images[index].classList.add('active');
                    } else {
                        images[i].classList.remove('active');
                    }
                }
                index++;
                index = index % imageCount;
            }, this.time);
        }
    }]);

    return Slider;
}();