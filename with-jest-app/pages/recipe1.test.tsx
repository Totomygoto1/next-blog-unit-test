/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Recipe1 from './recipe1';

it('App: Works with Recipe 1 Component - strIngredient - soy sauce', () => {
  render(<Recipe1 />);
  expect(screen.getByText(/soy sauce/i));
});
