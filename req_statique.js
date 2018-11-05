//=========================================================================
// Traitement de l'envoi d'une requête fichier
//=========================================================================
"use strict";

var fs = require("fs");
var path = require("path");

var trait = function(req, res, pathname) {

    var extension;
    var type;
    var file_path;
    var ressource;

    file_path = pathname.substr(1);
    extension = path.extname(pathname);

    if(extension === ".txt") {
        type = "text/plain";
    } else if(extension === ".html") {
        type = "text/html";
    } else if(extension === ".css") {
        type = "text/css";
    } else if(extension === ".jpg" || extension === ".jpeg") {
        type = "image/jpeg";
    } else if(extension === ".png") {
        type = "image/png";
    } else if(extension === ".gif") {
        type = "image/gif";
    } else if(extension === ".mp3") {
        type = "audio/mp3";
    } else if(extension === ".js") {
        type = "application/javascript";
    }

    try {
        ressource = fs.readFileSync(file_path);
        res.writeHead(200, {'Content-Type': type});
        res.write(ressource);
        res.end();
    } catch (e) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('ERREUR 404 : ressource inconnue');
        res.end();
    }
}

module.exports = trait;
