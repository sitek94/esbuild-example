require('esbuild')
  .build({
    entryPoints: ['app.ts'],
    bundle: true,
    outfile: 'build/out-build-ts.js',
  })
  .catch(() => process.exit(1));
