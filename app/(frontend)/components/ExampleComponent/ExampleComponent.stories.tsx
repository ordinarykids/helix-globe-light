import type { Meta, StoryObj } from '@storybook/react'
import ExampleComponent from '.'

const meta: Meta<typeof ExampleComponent> = {
  title: 'Components/ExampleComponent',
  component: ExampleComponent,
}

export default meta

type Story = StoryObj<typeof ExampleComponent>;

export const ExampleComponentStoryFoo: Story = {
  args: {
    text: 'Hello World!',
  },
}

export const ExampleComponentStoryBar: Story = {
  args: {
    text: 'Hello World, different variation!',
  },
}
