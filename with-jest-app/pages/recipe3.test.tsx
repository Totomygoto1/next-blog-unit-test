/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Recipe3 from './recipe3';

it('App: Works with Recipe 3 Component - strInstructions - cup water, brown sugar, ginger and garlic ...  ', () => {
  render(<Recipe3 />);
  expect(
    screen.getByText(
      /cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling./i,
    ),
  );
});
