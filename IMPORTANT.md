**Problem and solution: -
=> The issue is that the assets directory inside src isn’t copied to dist during build. You can see this for yourself by running npm run build or yarn build on your local machine.
=> As mentioned in the Vite Static Asset Handling (https://vitejs.dev/guide/assets.html#static-asset-handling) documentation, placing the assets directory into the public directory will result in it being copied during build. 
Again, you can see this by running npm run build or yarn build on your local machine.

********* From Static Asset Handling in Vite **********
**The public Directory: -

=> You can place the asset in a special public directory under your project root. 
=> Assets in this directory will be served at root path / during dev, and copied to the root of the dist directory as-is.
=> The directory defaults to <root>/public, but can be configured via the publicDir option.

Note that: -
=> You should always reference public assets using root absolute path - for example, public/icon.png should be referenced in source code as /icon.png.
=> Assets in public cannot be imported from JavaScript.

######### So, basically whenever you have static assets such as images, videos, etc to be rendered in the react app then you must place the assets directory it in the public directory and should give root absolute path - for example, public/icon.png should be referenced in source code as /icon.png.
