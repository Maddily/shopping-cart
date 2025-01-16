import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
  let footer;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    footer = screen.getByRole('contentinfo');
  });

  it('renders contact section', () => {
    const heading = screen.getByRole('heading', {
      name: /the accessory avenue/i,
    });
    expect(footer).toContainElement(heading);

    const address = screen.getByRole('paragraph', { name: 'address' });
    expect(footer).toContainElement(address);

    const phone = screen.getByRole('paragraph', { name: 'phone' });
    expect(footer).toContainElement(phone);

    const email = screen.getByRole('paragraph', { name: 'email' });
    expect(footer).toContainElement(email);
  });

  it('renders sitemap', () => {
    const heading = screen.getByRole('heading', {
      name: /sitemap/i,
    });
    expect(footer).toContainElement(heading);

    const homeButton = within(footer).queryByRole('link', {
      name: /home/i,
    });
    expect(homeButton).not.toBeNull();
  });

  it('renders payment methods', () => {
    const heading = screen.getByRole('heading', {
      name: /payment methods/i,
    });
    expect(footer).toContainElement(heading);

    const paymentMethodIcons = within(footer).queryAllByRole('img');

    expect(paymentMethodIcons.length).toEqual(5);
  });

  it('renders copyright statement', () => {
    const copyrightStatement = screen.getByRole('paragraph', {
      name: 'copyright statement',
    });

    expect(footer).toContainElement(copyrightStatement);
  });
});
