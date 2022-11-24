import http from 'http';
import express from 'express';

export default function createExpress(port) {
    const app = express();
    app.set('port', port);
    const server = http.createServer(app);
    server.listen(port, '0.0.0.0');

    return app;
}
