require('esbuild').build({
  bundle: true,
  entryPoints: ['App.jsx'],
  format: 'esm',
  loader: {
    '.png': 'dataurl',
    '.svg': 'text',
  },
  outdir: 'bundles',
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  watch: true
})