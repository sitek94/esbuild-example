require('esbuild')
  .build({
    entryPoints: ['app.jsx'],
    bundle: true,
    outfile: 'build/out-from-build-script.js',
  })
  .catch(() => process.exit(1));
