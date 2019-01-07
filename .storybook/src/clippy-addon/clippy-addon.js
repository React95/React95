import addons, { makeDecorator } from '@storybook/addons';

export default makeDecorator({
  name: 'withClippy',
  parameterName: 'code',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters: code }) => {
    const channel = addons.getChannel();
    channel.emit('clippy/set_component', {
      code,
      component: context.kind,
    });

    return getStory(context);
  },
});
