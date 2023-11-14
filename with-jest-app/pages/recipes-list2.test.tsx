/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Recipes2 from './recipes-list2';

it('App: Works with Recipes 2 Component - strMeal - Teriyaki Chicken Casserole ', () => {
  render(<Recipes2 />);
  expect(screen.getByText(/Teriyaki Chicken Casserole/i));
});
