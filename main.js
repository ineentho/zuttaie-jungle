(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var previous = document.querySelector(".previous");
var next = document.querySelector(".next");
var current = document.querySelector(".current");
var slides = ["screenshots/2015-06-23-01.jpg", "screenshots/bluearrow.jpg", "screenshots/pensharpener.jpg", "screenshots/pixelemerald.jpg"];
var lefta = document.querySelector(".lefta");
var currentimg = 2;
lefta.addEventListener("click", function () {
    currentimg--;
    images();
});
var righta = document.querySelector(".righta");

righta.addEventListener("click", function () {
    currentimg++;
    images();
});
document.body.addEventListener("keydown", function (e) {
    if (e.keyCode == 37) {
        currentimg--;
        images();
    }
    if (e.keyCode == 39) {
        currentimg++;
        images();
    }
});
function images() {
    previous.src = slides[mod(currentimg - 1, slides.length)];
    current.src = slides[mod(currentimg, slides.length)];
    next.src = slides[mod(currentimg + 1, slides.length)];
}
images();
function mod(n, m) {
    return (n % m + m) % m;
}
},{}]},{},[1])