import React from 'react';
import { render, fireEvent } from '../shared/test/utils';
import { Modal } from '../Modal';
import List from '../List';
import { TaskBar, Clock, WindowButton } from './';

describe('<TaskBar />', () => {
  describe('Snapshots', () => {
    describe('Clock', () => {
      it('should match snapshot', () => {
        const { container } = render(<Clock />);
        expect(container).toMatchSnapshot();
      });
    });

    describe('WindowButton', () => {
      it('should match snapshot', () => {
        const { container } = render(<WindowButton />);
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with small prop', () => {
        const { container } = render(<WindowButton small />);
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with active prop', () => {
        const { container } = render(
          <>
            <WindowButton small />
            <WindowButton small active />
          </>,
        );
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with icon prop', () => {
        const { container } = render(<WindowButton icon="bat" />);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
