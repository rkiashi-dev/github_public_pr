import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
  it('renders the hello world heading and increments the counter', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Hello, world!' }),
    ).toBeInTheDocument()

    const counterButton = screen.getByRole('button', { name: 'Clicked 0 times' })
    fireEvent.click(counterButton)

    expect(
      screen.getByRole('button', { name: 'Clicked 1 times' }),
    ).toBeInTheDocument()
  })
})
