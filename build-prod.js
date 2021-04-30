require('esbuild')
  .build({
    entryPoints: ['app.jsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outfile: 'build/out-prod.js',
  })
  .catch(() => process.exit(1));
