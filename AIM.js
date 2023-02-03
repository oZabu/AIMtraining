function _random() {
    var window_w = window.innerWidth;
    var window_h = window.innerHeight;


    var H_min = 1;
    var H_max = window_h - 110;
    var W_min = 1;
    var W_max = window_w - 110;

    var _a = Math.floor(Math.random() * (H_max + 1 - H_min)) + H_min;
    var _b = Math.floor(Math.random() * (W_max + 1 - W_min)) + W_min;

    var a = _a + "px";
    var b = _b + "px";

    document.getElementById("_height").style.height = a;
    document.getElementById("_width").style.width = b;

};
function HardB() {
    document.getElementById('_target').style.height = '30px';
    document.getElementById('_target').style.width = '30px';
};

function NormalB() {
    document.getElementById('_target').style.height = '60px';
    document.getElementById('_target').style.width = '60px';
};

function EasyB() {
    document.getElementById('_target').style.height = '90px';
    document.getElementById('_target').style.width = '90px';
};


setInterval(_random, 1000);
