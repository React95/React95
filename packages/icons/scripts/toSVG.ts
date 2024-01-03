import { getSync as getImageDataSync } from '@andreekeberg/imagedata';

type RGBAValues = `${string},${string},${string},${string}`;

type ColorMapRange = [number, number];
type ColorMap = {
  // r,g,b,a
  [key: RGBAValues]: ColorMapRange[];
};

function colorToHex(color: string) {
  const hex = parseInt(color).toString(16);

  return hex.length == 1 ? '0' + hex : hex;
}

function getColor([red, green, blue, alpha]: [
  string,
  string,
  string,
  string?,
]) {
  const nAlpha = alpha ? parseInt(alpha.toString()) : undefined;

  if (nAlpha === undefined || nAlpha === 255) {
    return '#' + colorToHex(red) + colorToHex(green) + colorToHex(blue);
  }

  if (nAlpha === 0) {
    return;
  }

  return `rgba(${red}, ${green}, ${blue}, ${nAlpha / 255})`;
}

// Optimized for horizontal lines
function makePathData(x: number, y: number, w: number) {
  return `M${x} ${y}h${w}`;
}

function makePath(color: string, data: string) {
  return `<path stroke="${color}" d="${data}" />\n`;
}

function extractColors(img: ImageData) {
  const colors: ColorMap = {};

  const data = img.data;
  const len = data.length;
  const w = img.width;

  for (let i = 0; i < len; i += 4) {
    if (data[i + 3] > 0) {
      const color: keyof ColorMap = `${data[i]},${data[i + 1]},${data[i + 2]},${
        data[i + 3]
      }`;

      colors[color] = colors[color] || [];

      const x = (i / 4) % w;
      const y = Math.floor(i / 4 / w);

      colors[color].push([x, y]);
    }
  }

  return colors;
}

function colorsToPaths(colors: ColorMap) {
  let output = '';

  Object.entries(colors).map(([colormap, values]) => {
    const color = getColor(
      colormap.split(',') as [string, string, string, string],
    );

    if (!color) {
      return;
    }

    const paths: string[] = [];
    let curPath: ColorMapRange = [0, 0];
    let w = 1;

    // Loops through each color's pixels to optimize paths
    values.map(function (value) {
      if (curPath && value[1] === curPath[1] && value[0] === curPath[0] + w) {
        w++;
      } else {
        if (curPath) {
          paths.push(makePathData(curPath[0], curPath[1], w));
          w = 1;
        }
        curPath = value;
      }
    });

    paths.push(makePathData(curPath[0], curPath[1], w)); // Finish last path

    output += makePath(color, paths.join(''));
  });

  return output;
}

function convertImage(img: ImageData) {
  const colors = extractColors(img);
  const paths = colorsToPaths(colors);

  const output =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 ' +
    img.width +
    ' ' +
    img.height +
    '" shape-rendering="crispEdges">\n' +
    paths +
    '</svg>';

  // Send message back to the main script
  return output;
}

export function generateSVG(fileName: string) {
  const imgData = getImageDataSync(fileName);

  const svg = convertImage(imgData);

  return svg;
}
