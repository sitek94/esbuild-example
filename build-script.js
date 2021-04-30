require('esbuild')
  .build({
    entryPoints: ['app.jsx'],
    bundle: true,
    outfile: 'build/out-build-script.js',
  })
  .catch(() => process.exit(1));
