import { makeIcons } from './makeIcons';
import {
  REACT_FOLDER,
  IMAGE_FOLDER,
  ICON_DEMOS_FILE_PATH,
  ICONS_INDEX_FILE_PATH,
  CSS_FILE_PATH,
  SVG_FOLDER,
} from './utils';
import { deleteFolder } from './utils';

deleteFolder('dist');
deleteFolder(REACT_FOLDER);
deleteFolder(IMAGE_FOLDER);
deleteFolder(SVG_FOLDER);
deleteFolder(ICON_DEMOS_FILE_PATH);
deleteFolder(ICONS_INDEX_FILE_PATH);
deleteFolder(CSS_FILE_PATH);

makeIcons();
