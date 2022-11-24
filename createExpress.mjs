import express from 'express';

export default function createExpress(port) {
    const app = express();

    app.listen(port, () => console.log(`Server started listening to port ${port}`));

    return app;
}
