import { render, screen } from '@testing-library/react'
import { test, expect } from '@testing-library/jest-dom'
import App from '.'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})