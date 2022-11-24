import axios from 'axios';

async function callRequest() {
    return axios.get('http://localhost:3000');
}

(async () => {
    for (let i = 0; i < 10000; i++) {
        const res = await Promise.all([
            callRequest(),
            callRequest(),
            callRequest(),
            callRequest(),
            callRequest(),
            callRequest(),
            callRequest(),
            callRequest(),
            callRequest(),
            callRequest(),
        ]);

        console.log('ok', i, res.length);
    }

})()
    .then(() => console.log('SUCCESS'))
    .catch((err) => {
        console.log(err);
        console.log('ERROR');
    })
