//=========================================================================
// Traitement de "req_commencer"
//=========================================================================
"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

    var page;
    var marqueurs;
    // AFFICHAGE<<<<<<<<<< DE LA PAGE D'ACCUEIL

    page = fs.readFileSync('./html/index.html', 'utf-8');

    page = page.supplant(marqueurs);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(page);
    res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;
