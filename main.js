// Copyright (C) 2024, Ellie Putnam
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program; if not, see
// <https://www.gnu.org/licenses/>.
// E-Mail: ellieputnam5@gmail.com

class bt {
    constructor(element) {
            var el;
            switch (element.charAt(0)) {
                case '#':
                    var to_be_got = element.replace(/#/g, "");
                    this.el = document.getElementById(to_be_got);
                break;
            
                case '.':
                    var to_be_got = element.replace(/./g, "");
                    this.el = document.getElementsByClassName(element);
                break;

                default:
                    this.el = document.getElementsByTagName(element);
                break;
        };
    }

    text(input) {
        this.el.textContent = input;
    };

    i_html(input) {
        this.el.innerHTML = input;
    };

    o_html(input) {
        this.el.outterHTML = input;
    };

    get(what) {
        switch (what) {
                case 'id':
                    return this.el.id;
                break;

                case 'tag':
                    return this.el.tagName;
                break;
        
                default:
                    return;
                break;
        };
    };
};

class ajax {
    constructor(uri, dat){
        this.uri = uri;
        this.dat = dat;
    }

    get() {
        var out;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            out = this.responseText; 
        };
        xhttp.open("GET", this.uri, true);
        xhttp.send();
        return out;
    };

    post() {
        var out;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            out = this.responseText; 
        };
        xhttp.open("POST", this.uri);
        xhttp.setRequestHeader("Content-type", this.dat);
        xhttp.send();
        return out;
    };

    forum(uri, data) {
        var out;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            out = this.responseText; 
        };
        xhttp.open("POST", this.uri, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
        return out;
    };
};

function $(input) {
    return new bt(input);
};