// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { name, title, version } from 'package.json';

export const environment = {

    /**
     * Application specific details used to populate interface fields.
     */
    app: {

        /**
         * Application name, equivalent to npm package name.
         */
        name: `${name}`,

        /**
         * Application human readable title.
         */
        title: `${title}`,

        /**
         * Application version, equivalent to npm package version.
         */
        version: `v${version}-SNAPSHOT`,
    },

    /**
     * Configuration options for the analytic service(s).
     */
    analytics: {

        /**
         * Boolean flag to disable analytics services, set to true for production only.
         */
        enabled: false,

        /**
         * Main configuration for mixpanel analytic provider.
         */
        mixpanel: {

            /**
             * Mixpanel project token to push events to.
             */
            token: 'REPLACE_ME'
        }
    },

    /**
     * Configuration options for the monitoring services used to diagnose, fix, and optimize the
     * performance of the application.
     */
    monitoring: {

        /**
         * Boolean flag to disable monitoring services, set to true for production only.
         */
        enabled: false,

        /**
         * Main configuration for sentry application monitorying client.
         */
        sentry: {

            /**
             * Sentry project dns (Data Source Name) to push events to.
             */
            dns: 'REPLACE_ME',

            /**
             * Define which outgoing requests the `sentry-trace` header will be attached to.
             */
            tracingOrigins: ['localhost'],

            /**
             * Sample rate to determine trace sampling, range between 0.0 and 1.0.
             *
             * 0.0 = 0% chance of a given trace being sent (send no traces)
             * 1.0 = 100% chance of a given trace being sent (send all traces)
             */
            tracesSampleRate: 1.0
        }
    },

    /**
     * Boolean flag to indicate when the build targets production or not.
     */
    production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
