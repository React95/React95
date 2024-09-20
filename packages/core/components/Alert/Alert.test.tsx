import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '../shared/test/utils';
import { Alert } from './Alert';

describe('<Alert />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with error type', () => {
      const { container } = render(
        <Alert title="Error" type="error" message="Error" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with warning type', () => {
      const { container } = render(
        <Alert title="Warning" type="warning" message="Warning" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with info type', () => {
      const { container } = render(
        <Alert title="Info" type="info" message="Info" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with question type', () => {
      const { container } = render(
        <Alert title="question" type="question" message="question" />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('onClose prop', () => {
    it('should call onClose when modal "X" button is pressed', () => {
      const onCloseMock = vi.fn();
      const { getAllByRole } = render(
        <Alert
          title="onClose"
          message="onClose"
          buttons={[{ value: 'Ok', onClick: onCloseMock }]}
        />,
      );

      const [x] = getAllByRole('button');

      fireEvent.click(x);

      expect(onCloseMock).toHaveBeenCalled();
    });
  });
});
