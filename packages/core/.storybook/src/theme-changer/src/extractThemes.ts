export type ThemeObject = {
  name: string;
  className: string;
  content: string;
};

function cssRuleListToThemeObject(rules: CSSRuleList) {
  return Array.from(rules)
    .filter(rule => (rule as CSSPageRule).selectorText !== 'body')
    .map(rule => {
      const className = (rule as CSSPageRule).selectorText.substring(1);

      // theme classes are like:
      //   r95_theme_win95_nrtzkz0
      //   \_/ \___/ \___/ \_____/
      // prefix  |     |     hash
      //       base   name
      const [prefix, base, name, hash] = className.split('_');

      const content = rule.cssText;

      return {
        className,
        name,
        content,
      };
    });
}

export const extractThemes = (frame: HTMLIFrameElement) => {
  if (!frame.contentDocument) {
    return;
  }

  // on development, vanilla-extract will create one style for each theme
  if (process.env.NODE_ENV === 'development') {
    const allStyleTagsArray = Array.from(
      frame.contentDocument.querySelectorAll('style'),
    );
    const extractedThemes = allStyleTagsArray
      // and each theme will have its file as data-attribute (data-file)
      .filter(link => link.dataset?.file?.includes('themes') && link.sheet)
      .map(link => {
        const [themeObject] = cssRuleListToThemeObject(link.sheet!.cssRules);

        return themeObject;
      });

    return extractedThemes;
  } else {
    // on prod, all css files will be merged into a single one, named
    // `preview-` and some hashes
    const allThemesLinkTag = Array.from(frame.contentDocument.styleSheets).find(
      s => s.href && s.href.includes('preview'),
    );

    if (allThemesLinkTag) {
      return cssRuleListToThemeObject(allThemesLinkTag.cssRules);
    }
  }
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
