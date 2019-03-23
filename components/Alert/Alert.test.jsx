import React from 'react';
import Alert from './Alert';
import { render, fireEvent } from 'react-testing-library';

describe('<Alert />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with error type', () => {
      const { container } = render(
        <Alert title="Error" type="error" message="Error" />
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with warning type', () => {
      const { container } = render(
        <Alert title="Warning" type="warning" message="Warning" />
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with info type', () => {
      const { container } = render(
        <Alert title="Info" type="info" message="Info" />
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('closeAlert prop', () => {
    it('should call closeAlert when modal "OK" button is pressed', () => {
      const closeAlertMock = jest.fn();
      const { getByText } = render(
        <Alert
          title="closeAlert"
          message="closeAlert"
          closeAlert={closeAlertMock}
        />
      );

      fireEvent.click(getByText('OK'));

      expect(closeAlertMock).toHaveBeenCalled();
    });
  });
});
