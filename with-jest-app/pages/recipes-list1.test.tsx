/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Recipes1 from './recipes-list1';

it('App: Works with Recipes 1 Component - idMeal - 52772 ', () => {
  render(<Recipes1 />);
  expect(screen.getByText(/52772/i));
});
