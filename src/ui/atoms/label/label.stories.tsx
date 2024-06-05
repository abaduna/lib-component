import type { Meta, StoryObj } from '@storybook/react'

import { label } from './'

const meta: Meta<typeof label> = {
  title: 'Atoms/label',
  component: label,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    label: 'texto'
  }
}
