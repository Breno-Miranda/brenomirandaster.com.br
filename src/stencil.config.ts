import { Config } from '@stencil/core';
import { env } from '@alepop/stencil-env';

// https://stenciljs.com/docs/config
export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://brenomiranda.local/',
    },
  ],
    plugins: [
       env()
   ]
};
