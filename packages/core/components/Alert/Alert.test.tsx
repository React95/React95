import React from 'react';
import { render, fireEvent } from '../shared/test/utils';
import Alert from './Alert';

describe('<Alert />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with error type', () => {
      const { container } = render(
        <Alert
          closeAlert={() => {}}
          title="Error"
          type="error"
          message="Error"
        />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with warning type', () => {
      const { container } = render(
        <Alert
          closeAlert={() => {}}
          title="Warning"
          type="warning"
          message="Warning"
        />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with info type', () => {
      const { container } = render(
        <Alert closeAlert={() => {}} title="Info" type="info" message="Info" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with question type', () => {
      const { container } = render(
        <Alert
          closeAlert={() => {}}
          title="question"
          type="question"
          message="question"
        />,
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
        />,
      );

      fireEvent.click(getByText('x'));

      expect(closeAlertMock).toHaveBeenCalled();
    });
  });
});
