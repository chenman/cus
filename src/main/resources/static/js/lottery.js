//游戏转盘
var lostDeg;
var myIsAward;
var awardName;
$(function() {
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000 / 60)
        }
    })();
    var totalDeg = 360 * 3 + 0;
    var steps = [];
    var prize, sncode;
    var count = 0;
    var now = 0;
    var a = 0.01;
    var outter, inner, timer, running = false;

    function countSteps() {
        var t = Math.sqrt(2 * totalDeg / a);
        var v = a * t;
        for (var i = 0; i < t; i++) {
            steps.push((2 * v * i - a * i * i) /2)
        }
        steps.push(totalDeg)
    }
    function step() {
        outter.style.webkitTransform = 'rotate(' + steps[now++] + 'deg)';
        outter.style.MozTransform = 'rotate(' + steps[now++] + 'deg)';
        if (now < steps.length) {
            requestAnimFrame(step)
        } else {
            running = false;
            setTimeout(function() {
            	var cur_deg = steps[steps.length-1];
            	var par_deg = 360-(cur_deg-Math.floor(cur_deg/360)*360);
            	
            	showAwardMsg(awardName, myIsAward);
            	
            }, 200)
        }
    }

    function start(deg) {    	
        deg = deg || lostDeg[parseInt(lostDeg.length * Math.random())];
        running = true;
        clearInterval(timer);
        totalDeg = 360 * 3 + deg;
        steps = [];
        now = 0;
        countSteps();
        requestAnimFrame(step)
    }
    window.start = start;
    outter = document.getElementById('outer');
    inner = document.getElementById('inner');
    i = 6;
    $(".beginPlay").click(function() {
        if (running) return;
        //单机版
        $(this).unbind("click");
        prize = null;
        raffle();
        running = false;
        
    })
});