/**
 * Created by Hamid on 13/03/2017.
 * @name    script.js
 * @desc    this script will animate a walking sprite
 */

(function(){

    var

        i                   =   0,
        leftMargin          =   0,
        path                =   "images/walking_sprite_2/",
        picArrayRight       =   ["right0.jpg", "right1.jpg", "right2.jpg", "right3.jpg",
                                "right4.jpg", "right5.jpg", "right6.jpg"],
        picArrayLeft        =   ["left0.jpg", "left1.jpg", "left2.jpg", "left3.jpg",
                                "left4.jpg", "left5.jpg", "left6.jpg"],
        walker              =   document.getElementById("walker"),
        startBtn            =   document.getElementById("startBtn"),
        stopBtn             =   document.getElementById("stopBtn"),
        walkTimeOut,


        walkRight       =   function(){
            if (leftMargin < 350) {
                if (i < picArrayRight.length) {
                    leftMargin += 10;
                    walker.src = path + picArrayRight[i];
                    walker.style.marginLeft = leftMargin + "px";

                    i++;

                } else {
                    i = 0;
                }
                walkTimeOut = setTimeout(function () {
                    walkRight();
                }, 100);
            }
            else {

                walkLeft();
            }
        },//walkRight

        walkLeft       =    function(){
            if (leftMargin > 0) {
                if (i < picArrayLeft.length) {
                    leftMargin -= 10;
                    walker.style.marginLeft = leftMargin + "px";
                    walker.src = path + picArrayLeft[i];
                    i++;

                } else {
                    i = 0;
                }
                walkTimeOut = setTimeout(function () {
                    walkLeft();
                }, 100);
            }
            else {
                walkRight();
            }
        },//walkLeft

        walk = function () {
            var
              str = walker.src;
                if (str.indexOf("right") >=0){
                    walkRight();
                } else {
                    walkLeft();
                }
            },//walk




            stopWalk  =   function(){
                clearTimeout(walkTimeOut);



            },//stopWalk


       bindBtns    =   function(){

                    startBtn.addEventListener("click", function () {
                        walk();
                        startBtn.disabled = true;
                        stopBtn.disabled = false;

                    });
                    stopBtn.addEventListener("click", function(){
                        stopWalk();
                        startBtn.disabled = false;
                        stopBtn.disabled = true;
                    });

        },//bindBtns


        init = function () {
                bindBtns();

        };//init

    window.addEventListener("load",init);
})();