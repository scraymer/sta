import { name, title, version } from 'package.json';

export const environment = {
    app: {
        name: `${name}`,
        title: `${title}`,
        version: `v${version}`,
    },
    analytics: {
        enabled: false,
        mixpanel: {
            token: 'REPLACE_ME'
        }
    },
    monitoring: {
        enabled: false,
        sentry: {
            dns: 'REPLACE_ME',
            tracingOrigins: ['localhost'],
            tracesSampleRate: 0.1
        }
    },
    production: true
};
