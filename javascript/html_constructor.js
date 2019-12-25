/*
  Name   : HTML Constructor
  Date   : 12/24/2019
  Author : SoundInfinity
*/

function HTML() {
    this.structure = {
        'head': [],
        'body': [],
    };

    this.addHeading = (Text, Level=1) => {
        if (typeof(Level)=='number' && Level <= 6) {
            this.structure.body.push(`<h${Level}>${Text}</h${Level}>`);
        }
        return this;
    }

    this.addText = (Text="") => {
        this.structure.body.push(`<p>${Text.replace(/\n/, '<br>')}</p>`);
        return this;
    }

    this.addCodeBlock = (Code="") => {
        this.structure.body.push(`<pre style="border: solid 4px #252525;font-size: 10px;font-family: monospace, 'Courier new';background-color:#252525">${Code}</pre>`);
        return this;
    }

    this.addStyle = (Style="") => {
        this.structure.body.unshift(`<style>${Style}</style>`);
        return this;
    }

    this.display = ()=>{
        try {
            try {
                document.head.innerHTML = this.structure.head.join('<br />');
                document.body.innerHTML = this.structure.body.join('<br />');    
            } catch(x) {
                document.write(this.structure.body.join('<br />'));
            }
        } catch (x) {
            console.log(x);
        }
    }
}

var Explanation = new HTML();
Explanation.addStyle(`
body {
    background-color:#212121;
    color:white;
}  
h1, h2, h3 {
    color:lightblue;
    font-family:Verdana;
    margin:0;
    padding:0;
}  
a, pre, p {
    color:white;
    font-family:Verdana;
}
`)

Explanation
.addHeading('Background', 1)
.addText(`I have been sharing some code, and I have seen that every single time, after a while, it got an automatic upvote, so, I wanted to make a script to make that happen but in my own.`)
.addHeading('Script')
.addCodeBlock(`
/* AUTO VOTE - Script - Made by SoundInfinity */
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
`)
.display();
