import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { ImageLoader } from 'esbuild-vanilla-image-loader';
import { mergeConfig } from 'vite';

export const viteFinal = async config => {
  return mergeConfig(config, {
    plugins: [
      vanillaExtractPlugin({
        debug: true,
        identifiers: ({ hash }) => `r95_${hash}`,
        esbuildOptions: {
          plugins: [
            ImageLoader({
              filter: /\.(png|svg|ttf|eot|woff|woff2)$/,
            }),
          ],
        },
      }),
    ],
  });
};
