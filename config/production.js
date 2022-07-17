require('esbuild').buildSync({
  bundle: true,
  entryPoints: ['App.jsx'],
  format: 'esm',
  loader: {
    '.png': 'dataurl',
    '.svg': 'text',
  },
  minify: true,
  outdir: 'bundles',
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
})