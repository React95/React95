import addons, { makeDecorator } from '@storybook/addons';

export default makeDecorator({
  name: 'withClippy',
  parameterName: 'code',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, parameters) => {
    const channel = addons.getChannel();

    // Our simple API above simply sets the notes parameter to a string,
    // which we send to the channel
    channel.emit('clippy/set_component', {
      code: parameters,
      component: context.kind,
    });

    return getStory(context);
  },
});
