/*
Bug: The index.html page starts at a scroll point blocking the navigation menu 

Fix: Reset the scroll point to x:0 y:0 (original start point)
*/

window.onload = function() {
    window.scrollBy(0,0);
};