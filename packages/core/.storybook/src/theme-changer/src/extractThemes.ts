export type ThemeObject = {
  name: string;
  className: string;
  content: string;
};

export const extractThemes = (frame: HTMLIFrameElement) => {
  if (!frame.contentDocument) {
    return;
  }

  const extractedThemes: ThemeObject[] = [];

  for (let link of frame.contentDocument.querySelectorAll('style')) {
    try {
      if (link.dataset?.file?.includes('ThemeProvider')) {
        const fileName = link.dataset.file.split('/').at(-1);
        const [name] = fileName?.split('.') || [];

        if (!(link as HTMLLinkElement | HTMLStyleElement).sheet) {
          return;
        }

        if (!link.sheet) {
          return;
        }

        const [themeClassName] = link.sheet.cssRules;

        const className = (
          themeClassName as CSSPageRule
        ).selectorText.substring(1);

        extractedThemes.push({
          name,
          className,
          content: themeClassName.cssText,
        });
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

export const injectThemes = (themes: Pick<ThemeObject, 'content'>[]) => {
  themes.forEach(({ content }) => {
    const newLink = document.createElement('style');
    newLink.innerHTML = content;

    document.head.appendChild(newLink);
  });
};
