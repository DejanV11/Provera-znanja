const fs = require('fs');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const PATH = "www/";
let artikli = [
    {
        "id": 1,
        "naziv": "Hleb",
        "cena": 30,
        "imeKompanije": "Hermes"
    },
    {
        "id": 2,
        "naziv": "Kifla",
        "cena": 15,
        "imeKompanije": "Bistro"
    },
    {
        "id": 3,
        "naziv": "Burek",
        "cena": 100,
        "imeKompanije": "As"
    }
];

http.createServer(function (req, res){    
    let urlObj = url.parse(req.url,true,false);
    if (req.method == "GET"){
        if (urlObj.pathname == "/sviArtikli"){ 
            response = sviArtikli(imeKompanije);
            res.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Svi Artikli</title>
                    <style>
                        table, th, td {
                            border: 1px solid black;
                        }
                        th,td {
                            padding: 5px 10px;
                        }
                    </style>
                </head>
                <body>
                    <h3>Svi artikli</h3>
                    <a href="/dodajArtikal">Dodaj artikal</a>
                    <br>
                    <br>
                    <div id="prikaz">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Naziv</th>
                                    <th>Cena</th>
                                    <th>Ime kompanije</th>
                                    <th>Izmeni</th>
                                    <th>Obrisi</th>
                                </tr>
                            </thead>               
                            <tbody>
            `);
            for(let r of response){
                res.write(`
                    <tr>
                        <td>${r.id}</td>
                        <td>${r.naziv}</td>
                        <td>${r.cena}</td>
                        <td>${r.imeKompanije}</td>                        
                    </tr>
                `);
            }
            res.end(`
                            </tbody>
                        </table>
                    </body>
                </html>
            `);
        }           
        if (urlObj.pathname == "/dodajArtikal"){
            res.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Dodaj Artikal</title>
                </head>
                <body>
                    <h3>Dodaj artikal</h3>
                    <a href="/sviArtikli">Svi artikli</a>
                    <br><br>
                    <form action='/dodajArtikal' method='POST'>
                        ID: <input type='number' name='id'><br><br>
                        NAZIV: <input type='text' name='naziv'><br><br>
                        CENA: <input type='text' name='cena'><br><br>
                        IMEKOMPANIJE: <input type='text' name='imeKompanije'><br><br>
                        <button type='submit'>DODAJ ARTIKAL</button>
                    </form>
                </body>
                </html>
            `);
        }
    }
    else if(req.method == "POST") {        
        if (urlObj.pathname == "/obrisiArtikal"){
            var body = '';
                req.on('data', function (data) {
                body += data;
            });
            req.on('end', function () {
                obrisiArtikal(querystring.parse(body).id)
                res.writeHead(302, {
                    'Location': '/sviArtikli'
                });
                res.end();
            });
        }
        if (urlObj.pathname == "/dodajArtikal"){
            var body = '';
                req.on('data', function (data) {
                body += data;
            });
            req.on('end', function () {
                dodajArtikal(querystring.parse(body).id,querystring.parse(body).naziv,
                           querystring.parse(body).cena,querystring.parse(body).imeKompanije);
                res.writeHead(302, {
                    'Location': '/sviArtikli'
                });
                res.end();
            });
        }
    }
}).listen(4000);

function sviArtikli(imeKompanije){
    return artikli;
}

function obrisiArtikal(id){
    let temp = []
    for(let i=0;i<artikli.length;i++){
        if(artikli[i].id != id){
            pomocni.push(artikli[i])
        }
    }
    artikli = temp
    return osobe
}
function dodajArtikal(id,naziv,cena,imeKompanije){
    let artikli = {
        'id': id,
        'naziv': naziv,
        'cena': cena,
        'imeKompanije': imeKompanije
    };
    artikli.push(artikal);
}