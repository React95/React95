// Props that take React elements, components or functions (e.g. `icon`,
// `titleBarOptions`, `onChange`) can't be edited in the Controls panel: they
// would get a JSON editor that can't represent them. This turns their control
// off and says so in their description, shown in Controls and in the docs
// props table.

// Types that hold elements or callbacks inside them, which their names don't
// tell: buttons have `onClick`, menu items a `list` element, tree nodes icons
const typesWithElements = ['ModalButtons', 'ModalMenu', 'NodeProps'];

const takesElements = argType => {
  const summary = argType.table?.type?.summary ?? '';

  return (
    argType.type?.name === 'function' ||
    /ReactElement|ReactNode|JSX\.Element|ComponentType|=>/.test(summary) ||
    typesWithElements.some(type => summary.includes(type))
  );
};

const note =
  "Can't be edited in the Controls panel, as it takes React elements or " +
  "functions. See the story's code for an example.";

export const markNonConfigurableProps = ({ argTypes }) =>
  Object.fromEntries(
    Object.entries(argTypes).map(([name, argType]) => {
      // a control set on purpose stays, e.g. text for a `children: ReactNode`
      const hasChosenControl =
        argType.control &&
        !['object', undefined].includes(argType.control.type);

      if (!takesElements(argType) || hasChosenControl) {
        return [name, argType];
      }

      return [
        name,
        {
          ...argType,
          control: false,
          description: [argType.description, note].filter(Boolean).join('\n\n'),
        },
      ];
    }),
  );
