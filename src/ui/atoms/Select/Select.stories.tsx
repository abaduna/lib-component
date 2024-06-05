import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './'

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}