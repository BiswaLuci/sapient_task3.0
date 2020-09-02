import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import 'isomorphic-fetch';
const app = express();

const PORT = 8000;
app.use('^/&',(req, res, next) => {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
    .then(response => response.json())
    .then(initialData => {

        fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) =>{
            if(err){
                console.log(err);
                return res.status(500).send("Error")
            }
            return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App initialData={initialData}/>)}</div>`));
        });
    })

});

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.listen(PORT, () =>{
    console.log(`App launched on ${PORT}`)
})