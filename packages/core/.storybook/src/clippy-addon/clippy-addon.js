import addons, { makeDecorator } from '@storybook/addons';

export default makeDecorator({
  name: 'withClippy',
  parameterName: 'code',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();

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
