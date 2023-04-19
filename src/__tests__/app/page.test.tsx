import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    it('should have h2 tag', () => {
      render(<Home />);

      const heading = screen.getByRole('heading', {
        name: /Boilerplate code/,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
