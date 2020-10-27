import fs from 'fs';
import ICO from 'icojs';

const ICONS_FOLDER = './src/icons';
const DEST_FOLDER = './src/png';

const files = fs.readdirSync(ICONS_FOLDER);

files.forEach(icon => {
  const buffer = fs.readFileSync(`${ICONS_FOLDER}/${icon}`);

  ICO.parse(buffer, 'image/png').then(images => {
    images.forEach(image => {
      const [iconName] = icon.split('.');

      let fileName = `${iconName}_${image.width}x${image.height}-${image.bpp}`;

      if (fs.existsSync(`${DEST_FOLDER}/${fileName}bit.png`)) {
        fileName = `${fileName}bit_(1).png`;
      } else {
        fileName = `${fileName}bit.png`;
      }

      const data = Buffer.from(image.buffer);
      const fileDestination = `${DEST_FOLDER}/${fileName}`;

      fs.writeFileSync(fileDestination, data);
      console.log(`icon ${fileDestination} created`);
    });
  });
});


  
