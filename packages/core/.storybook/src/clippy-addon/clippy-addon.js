import { addons } from '@storybook/manager-api';
import { makeDecorator } from '@storybook/preview-api';

export const withClippy = makeDecorator({
  name: 'withClippy',
  parameterName: 'clippy',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();

    debugger;
    if (typeof parameters === 'object') {
      channel.emit('clippy/set_component', {
        code: parameters.code,
        pkg: parameters.pkg,
        component: parameters.import,
      });
    } else {
      channel.emit('clippy/set_component', {
        code: parameters,
        component: context.kind,
      });
    }

    return getStory(context);
  },
});
