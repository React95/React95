import React from 'react';
import Alert from './Alert';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('<Alert />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with error type', () => {
      expect(
        renderer
          .create(<Alert title="Error" type="error" message="Error" />)
          .toJSON()
      ).toMatchSnapshot();
    });

    it('should match snapshot with warning type', () => {
      expect(
        renderer
          .create(<Alert title="Warning" type="warning" message="Warning" />)
          .toJSON()
      ).toMatchSnapshot();
    });

    it('should match snapshot with info type', () => {
      expect(
        renderer
          .create(<Alert title="Info" type="info" message="Info" />)
          .toJSON()
      ).toMatchSnapshot();
    });
  });

  describe('closeAlert prop', () => {
    it('should call closeAlert when modal "OK" button is pressed', () => {
      const closeAlertMock = jest.fn();
      const ShallowAlert = mount(
        <Alert
          title="closeAlert"
          message="closeAlert"
          closeAlert={closeAlertMock}
        />
      );

      ShallowAlert.find('Button').simulate('click');

      expect(closeAlertMock).toHaveBeenCalled();
    });
  });
});
