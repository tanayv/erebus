import express from 'express';
import fs from 'fs';
import https from "https";

const app = express();

const server = https
    .createServer({
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
        enableTrace: true,
        requestCert: true
    }, app)

server.listen(4000, () => {
    console.log('server is runing at port 4000')
});

// server.on('secureConnection', (socket) => {
//     //console.log("sc Socket", socket.ssl);

//     //console.log(socket.ssl.requestCert);
//     console.log(socket.getPeerCertificate());
// })

app.get('/', (req, res) => {
    res.json({
        aurBhai: "SabTheek"
    })
})
