import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '../shared/test/utils';
import { Button } from './Button';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Button />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('value prop', () => {
    it('should display value as Button children', () => {
      const { container } = render(<Button>Cancel</Button>);

      expect(container.querySelector('button')?.textContent).toBe('Cancel');
    });
  });

  describe('onClick prop', () => {
    it('should call onClick function when Button is clicked', () => {
      const onClickMock = vi.fn();
      const { getByText } = render(<Button onClick={onClickMock}>ok</Button>);

      fireEvent.click(getByText('ok'));

      expect(onClickMock).toHaveBeenCalled();
    });
  });

  describe('keyboard focus', () => {
    it('should allow the Button to receive focus', () => {
      const { container } = render(<Button>ok</Button>);
      const button = container.querySelector('button');

      button?.focus();

      expect(document.activeElement).toBe(button);
    });
  });
});
