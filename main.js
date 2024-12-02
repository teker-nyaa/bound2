// copyleft, Ellie Putnam 2024
// Ego sum

const body = document.body

function $(element) {
    var el;

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
    }

    function text(input) {
        el.textContent = input
    }

    function i_html(input) {
        el.innerHTML = input;
    }

    function o_html(input) {
        el.outterHTML = input;
    }

    function get(what) {
        switch (what) {
                case 'id':
                    return el.id;
                break;
        
                default:
                    return
                break;
        }
    }
}