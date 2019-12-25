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
