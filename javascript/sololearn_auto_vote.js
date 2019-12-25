/*
  Name: SoloLearn Auto Vote
  Date: 12/24/2019
  Author: SoundInfinity
*/

var PublicCodes =  document.querySelector("#publicCodes");
var Children = PublicCodes.children

var Buttons = {
    "getUpVote": function(code) {
        return code.querySelector('div.upvote');
    },
    "getDownVote": function(code) {
        return code.querySelector('div.downvote');
    },
};

var index = 0;
var timer = setInterval(()=>{
    if (index < Children.length) {
        Buttons.getDownVote(Children[index]).click();
        ++index;
    } else {
        clearInterval(timer);
    }
}, 1000);
