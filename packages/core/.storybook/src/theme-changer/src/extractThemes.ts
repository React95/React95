export type ThemeObject = {
  name: string;
  className: string;
  content: string;
};

function toThemeClassName(name: string) {
  return `r95_theme_${name}`;
}

function getThemeContent({
  rules,
  availableThemes,
}: {
  rules: CSSRuleList;
  availableThemes: string[];
}) {
  return Array.from(rules)
    .filter(rule => (rule as CSSPageRule).selectorText?.startsWith(':root'))
    .map((rule, i) => {
      const name = availableThemes[i];
      const className = toThemeClassName(name);

      return {
        name,
        className,
        content: rule.cssText.replace(':root', `.${className}`),
      };
    });
}

export const extractThemes = (frame: HTMLIFrameElement) => {
  if (!frame.contentDocument) {
    return;
  }

  const availableThemes = (frame.contentWindow as any).themes as string[];

  if (process.env.NODE_ENV === 'development') {
    // on development, vanilla-extract will create one style for each theme
    const allStyleTagsArray = Array.from(
      frame.contentDocument.querySelectorAll('style'),
    );
    const extractedThemes = allStyleTagsArray
      // and each theme will have its file as data-attribute (data-file)
      .filter(link => link.dataset?.file?.includes('themes') && link.sheet)
      .map(link => {
        const [name] = link.dataset?.file?.split('/').pop()?.split('.') || [];
        const [themeObject] = getThemeContent({
          rules: link.sheet!.cssRules,
          availableThemes: [name],
        });

        return { ...themeObject, name };
      });

    return extractedThemes;
  } else {
    // on prod, all css files will be merged into a single one, named
    // `preview-` and some hashes
    const allThemesLinkTag = Array.from(frame.contentDocument.styleSheets).find(
      s => s.href && s.href.includes('preview'),
    );

    if (allThemesLinkTag) {
      const themeContent = getThemeContent({
        rules: allThemesLinkTag.cssRules,
        availableThemes,
      });

      function nextRootRule() {
        return Array.from(allThemesLinkTag?.cssRules!).findIndex(
          r => (r as CSSStyleRule).selectorText === ':root',
        );
      }

      // removing all `:root` selectors from preview
      let ruleIndex = nextRootRule();

      while (ruleIndex !== -1) {
        allThemesLinkTag.deleteRule(ruleIndex);

        ruleIndex = nextRootRule();
      }

      // and injecting them as classes following
      // `r95_theme_{name}` pattern
      injectThemes(themeContent, frame.contentDocument.head);

      return themeContent;
    }
  }
};

export const injectThemes = (
  themes: Pick<ThemeObject, 'content' | 'name'>[],
  head: HTMLHeadElement = document.head,
) => {
  themes.forEach(({ content, name }) => {
    const newLink = document.createElement('style');
    newLink.innerHTML = content;
    newLink.dataset.r95ThemeName = name;

    head.appendChild(newLink);
  });
};
