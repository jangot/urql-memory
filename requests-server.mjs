import 'isomorphic-unfetch';
import { createClient, fetchExchange, dedupExchange, gql } from '@urql/core';
import createExpress from './createExpress.mjs';
import expressStatusMonitor from 'express-status-monitor';

const query = gql`
    query {
        books {
            title
            author
        }
    }
`
const urqlClient = createClient({
    url: 'http://localhost:4000/graphql',
    exchanges: [dedupExchange, fetchExchange],
    requestPolicy: 'network-only',
});


const app = createExpress(3000);

app.use(expressStatusMonitor());

app.get('/', async(req, res) => {
    const { data } = await urqlClient.query(query, { test: new Date() }).toPromise().then(result => {
        return result;
    })

    res.send(data)
});
