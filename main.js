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

function $(element) {
    var el;

    var on_load;

    switch (element.charAt(0)) {
            case '#':
                el.removeCharAt(0);
                el = document.getElementById(element);
            break;
        
            case '.':
                el.removeCharAt(0);
                el= document.getElementsByClassName(element)
            break;

            default:
                el = document.getElementsByTagName(element)
            break;
    };

    function text(input) {
        el.textContent = input
    };

    function i_html(input) {
        el.innerHTML = input;
    };

    function o_html(input) {
        el.outterHTML = input;
    };

    function get(what) {
        switch (what) {
                case 'id':
                    return el.id;
                break;

                case 'tag':
                    return el.tagName;
                break;
        
                default:
                    return;
                break;
        }
    };

    window.onload = on_load;
};

function ajax_get(uri) {
    var out;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        out = this.responseText; 
    }
    xhttp.open("GET", uri, true);
    xhttp.send();
    return out;
};

function ajax_post(uri, dat_type) {
    var out;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        out = this.responseText; 
    };
    xhttp.open("POST", uri, true);
    xhttp.setRequestHeader("Content-type", dat_type);
    xhttp.send();
    return out;
};

function ajax_forum(uri, data) {
    var out;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        out = this.responseText; 
    };
    xhttp.open("POST", uri, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data);
    return out;
};