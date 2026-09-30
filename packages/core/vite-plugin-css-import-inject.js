import fs from 'fs';
import path from 'path';

export const cssImportInject = () => {
  let config;

  return {
    name: 'css-import-inject',
    apply: 'build',
    enforce: 'post',

    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    writeBundle(option, bundle) {
      if (!config.build || !config.build.lib) {
        return;
      }

      const files = Object.keys(bundle);

      for (const file of files) {
        // skip entry file (index.js)
        // and generated css files (*.css.ts.vanilla.css)
        if (bundle[file].isEntry || !file.match(/.*\.css.[c,m]?js$/)) {
          continue;
        }

        let cssLookup = '';

        if (file.includes('theme')) {
          const [, , name] = file.split('/');
          const [theme] = name.split('.');

          cssLookup = theme;
        } else {
          const [, component] = file.split('/');
          cssLookup = component;
        }

        const cssVanillaExtractFile = files.find(f => {
          const size = f.substring(0, f.lastIndexOf('.')).length;

          return f.endsWith(`/${cssLookup}.css`, size);
        });
        const cssFile = files.find(f =>
          f.endsWith(`/${cssLookup}.css.ts.vanilla.css`),
        );

        if (cssFile && cssVanillaExtractFile) {
          // since Vite 5 (Rollup 4) the asset `name` includes the source
          // directory, so only the file name is used (it sits next to `file`)
          const cssFileName = path.basename(bundle[cssFile].fileName);

          const filePath = path.resolve('dist', file);
          const data = fs.readFileSync(filePath, {
            encoding: 'utf8',
          });

          const cssImport =
            option.format === 'es'
              ? `import './${cssFileName}'`
              : `require('./${cssFileName}')`;
          fs.writeFileSync(filePath, `${cssImport};\n${data}`);
        }
      }
    },
  };
};
