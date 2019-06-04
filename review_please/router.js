const url = require("url");

function route(path){
    let template;
    switch (path) {
        case "/":
            template = "<h1>Welcome!</h1>";
            break;
        case "/about":
            template = "<h1>About</h1>";
            break;
        case "/location":
            template = "<h1>Location</h1>";
            break;
        case "/contact":
            template = "<h1>Contact</h1>";
            break;
        default:
            template = "<h1>404. Not found</h1>";
            break;
    }

    return template;
}

module.exports.route = route;
