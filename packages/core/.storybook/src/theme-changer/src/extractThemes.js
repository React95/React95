export const extractThemes = () => {
  const [previewFrame] = document.getElementsByTagName('iframe');

  const extractedThemes = {};

  for (let link of previewFrame.contentDocument.querySelectorAll(
    'link, style',
  )) {
    try {
      if (!link.sheet) {
        console.warn(
          'Warning:',
          "Property 'sheet' is not set on element",
          link,
        );
      } else if (link.dataset.file.includes('ThemeProvider')) {
        const fileName = link.dataset.file.split('/').at(-1);
        const [themeName] = fileName.split('.');

        const [themeClassName] = link.sheet.rules;

        extractedThemes[themeName] = themeClassName.selectorText.substring(1);

        const newLink = document.createElement('style');
        newLink.innerHTML = themeClassName.cssText;

        document.head.appendChild(newLink);
      }
    } catch (e) {
      console.warn(
        'Warning:',
        e.message,
        ". Try set crossorigin='anonymous' on element",
        link,
      );
    }
  }

  return extractedThemes;
};
