import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-static';


import preprocess from 'svelte-preprocess';
import { optimizeImports } from "carbon-preprocess-svelte";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		
		adapter: adapter(),
		//	 default options are shown,
		//	pages: 'build',
			//assets: 'build',
			//fallback: null,
			//precompress: false,
			//trailingSlash: 'always'
	//	}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};

// export default config;

// svelte.config.js


export default {
	preprocess: [optimizeImports()],
	config,
	
	

  
};