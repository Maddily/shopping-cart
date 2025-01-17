import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

vi.mock('lucide-react', () => ({
  ShoppingCart: vi.fn(() => <svg data-testid="shopping-cart-icon"></svg>),
}));

describe('Cart', () => {
  let cartLink;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Cart path="cart" />
      </BrowserRouter>
    );

    cartLink = screen.getByRole('link', { name: 'cart' });
  });

  it('renders the cart link with the correct path', async () => {
    expect(cartLink).toHaveAttribute('href', '/cart');
  });

  it('renders the ShoppingCart icon', () => {
    const shoppingCartIcon = screen.getByTestId('shopping-cart-icon');

    expect(shoppingCartIcon).toBeInTheDocument();
  });

  it('renders the number of items in the cart', () => {
    const numberOfItems = screen.getByLabelText('number of items in cart');

    expect(cartLink).toContainElement(numberOfItems);
  });
});
