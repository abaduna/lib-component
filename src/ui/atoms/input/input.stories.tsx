import type { Meta, StoryObj } from '@storybook/react'

import { input } from './'

const meta: Meta<typeof input> = {
  title: 'Atoms/input',
  component: input,
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
    label: 'Place holder'
  }
}
