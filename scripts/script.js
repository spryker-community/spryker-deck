import { check } from "k6";
import http from 'k6/http';

export const options = {
    discardResponseBodies: true,
    scenarios: {
        sprykerLocalImprint: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '30s', target: 100 },
                { duration: '30s', target: 10 },
                { duration: '10s', target: 0 },
            ],
            gracefulRampDown: '0s',
            exec: 'sprykerLocalImprint'
        },
        sprykerHostedImprint: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '30s', target: 100 },
                { duration: '30s', target: 10 },
                { duration: '10s', target: 0 },
            ],
            gracefulRampDown: '0s',
            exec: 'sprykerHostedImprint'
        },
    },
};

// { duration: '30s', target: 10 },
// { duration: '30s', target: 10 },
// { duration: '30s', target: 50 },
// { duration: '30s', target: 50 },
// { duration: '10s', target: 0 },

let params = {
    timeout: '5s'
};

export function sprykerLocalImprint() {
    let res = http.get('http://yves.de.spryker.local/en/imprint', params);
    check(res, {
        "is status 200": (r) => r.status === 200
    });
    check(res, {
        "is status != 200": (r) => r.status !== 200
    });
}

export function sprykerHostedImprint() {
    let res = http.get('https://www.de.b2c.demo-spryker.com/en/imprint', params);
    check(res, {
        "is status 200": (r) => r.status === 200
    });
    check(res, {
        "is status != 200": (r) => r.status !== 200
    });
}
