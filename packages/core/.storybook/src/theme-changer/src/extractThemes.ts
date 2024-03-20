export type ThemeObject = {
  name: string;
  className: string;
  content: string;
};

function toThemeClassName(name: string) {
  return `r95_theme_${name}`;
}

function getThemeContent(rules: CSSRuleList, name) {
  return Array.from(rules)
    .filter(rule => (rule as CSSPageRule).selectorText !== 'body')
    .map(rule => {
      const className = toThemeClassName(name);

      return {
        className,
        content: rule.cssText.replace(':root', `.${className}`),
      };
    });
}

export const extractThemes = (frame: HTMLIFrameElement) => {
  if (!frame.contentDocument) {
    return;
  }

  // on development, vanilla-extract will create one style for each theme
  const allStyleTagsArray = Array.from(
    frame.contentDocument.querySelectorAll('style'),
  );
  const extractedThemes = allStyleTagsArray
    // and each theme will have its file as data-attribute (data-file)
    .filter(link => link.dataset?.file?.includes('themes') && link.sheet)
    .map(link => {
      const [name] = link.dataset?.file?.split('/').pop()?.split('.') || [];
      const [themeObject] = getThemeContent(link.sheet!.cssRules, name);

      return { ...themeObject, name };
    });

  return extractedThemes;
  // if (process.env.NODE_ENV === 'development') {
  // } else {
  //   // on prod, all css files will be merged into a single one, named
  //   // `preview-` and some hashes
  //   const allThemesLinkTag = Array.from(frame.contentDocument.styleSheets).find(
  //     s => s.href && s.href.includes('preview'),
  //   );

  //   if (allThemesLinkTag) {
  //     return cssRuleListToThemeObject(allThemesLinkTag.cssRules);
  //   }
  // }
};

export const injectThemes = (
  themes: Pick<ThemeObject, 'content' | 'name'>[],
) => {
  themes.forEach(({ content, name }) => {
    const newLink = document.createElement('style');
    newLink.innerHTML = content;
    newLink.dataset.r95ThemeName = name;

    document.head.appendChild(newLink);
  });
};
