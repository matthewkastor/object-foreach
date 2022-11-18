(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
objectForeach = require('../src/object-foreach.js');

},{"../src/object-foreach.js":2}],2:[function(require,module,exports){
/*jslint
    node: true
    indent: 4,
    maxerr: 50,
    white: true,
    node: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * Executes a function on each of an objects own enumerable properties. The
 *  callback function will receive three arguments: the value of the current
 *  property, the name of the property, and the object being processed. This is
 *  roughly equivalent to the signature for callbacks to
 *  Array.prototype.forEach.
 * @param {Object} obj The object to act on.
 * @param {Function} callback The function to execute.
 * @returns {Object} Returns the given object.
 */
function objectForeach(obj, callback) {
    "use strict";
    Object.keys(obj).forEach(function (prop) {
        callback(obj[prop], prop, obj);
    });
    return obj;
}

module.exports = objectForeach;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYnJvd3Nlck1haW4uanMiLCJzcmMvb2JqZWN0LWZvcmVhY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm9iamVjdEZvcmVhY2ggPSByZXF1aXJlKCcuLi9zcmMvb2JqZWN0LWZvcmVhY2guanMnKTtcclxuIiwiLypqc2xpbnRcclxuICAgIG5vZGU6IHRydWVcclxuICAgIGluZGVudDogNCxcclxuICAgIG1heGVycjogNTAsXHJcbiAgICB3aGl0ZTogdHJ1ZSxcclxuICAgIG5vZGU6IHRydWUsXHJcbiAgICBicm93c2VyOiB0cnVlLFxyXG4gICAgZGV2ZWw6IHRydWUsXHJcbiAgICBwbHVzcGx1czogdHJ1ZSxcclxuICAgIHJlZ2V4cDogdHJ1ZVxyXG4qL1xyXG4vKmdsb2JhbCBhdHJvcGEgKi9cclxuLy8gZW5kIGhlYWRlclxyXG5cclxuLyoqXHJcbiAqIEV4ZWN1dGVzIGEgZnVuY3Rpb24gb24gZWFjaCBvZiBhbiBvYmplY3RzIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIFRoZVxyXG4gKiAgY2FsbGJhY2sgZnVuY3Rpb24gd2lsbCByZWNlaXZlIHRocmVlIGFyZ3VtZW50czogdGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50XHJcbiAqICBwcm9wZXJ0eSwgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5LCBhbmQgdGhlIG9iamVjdCBiZWluZyBwcm9jZXNzZWQuIFRoaXMgaXNcclxuICogIHJvdWdobHkgZXF1aXZhbGVudCB0byB0aGUgc2lnbmF0dXJlIGZvciBjYWxsYmFja3MgdG9cclxuICogIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gYWN0IG9uLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gZXhlY3V0ZS5cclxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgZ2l2ZW4gb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gb2JqZWN0Rm9yZWFjaChvYmosIGNhbGxiYWNrKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgIGNhbGxiYWNrKG9ialtwcm9wXSwgcHJvcCwgb2JqKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RGb3JlYWNoOyJdfQ==
