/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Recipe2 from './recipe2';

it('App: Works with Recipe 2 Component - strMeasure - 3/4 cup ', () => {
  render(<Recipe2 />);
  expect(screen.getByText(/3\/4 cup/i));
});
