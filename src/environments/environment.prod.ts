import { name, title, version } from 'package.json';

export const environment = {
    app: {
        name: `${name}`,
        title: `${title}`,
        version: `v${version}`,
    },
    analytics: {
        enabled: true,
        mixpanel: {
            token: 'REPLACE_ME'
        }
    },
    monitoring: {
        enabled: true,
        sentry: {
            dns: 'REPLACE_ME',
            tracingOrigins: ['localhost'],
            tracesSampleRate: 0.1
        }
    },
    production: true
};
