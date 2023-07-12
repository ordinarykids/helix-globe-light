import type { Meta, StoryObj } from '@storybook/react'
import Typography from '.'

const meta: Meta<typeof Typography> = {
  title: 'Global Styles/Typography',
  component: Typography,
}

export default meta

type Story = StoryObj<typeof Typography>;

const defaultContent = 'The quick brown fox jumped over the lazy sleeping dog'

export const Fonts: Story = {
  args: {
    elements: [{
      name: 'TT Norms Pro Variable',
      fontSize: 20,
      lineHeight: 24,
      weight: 344,
      content: 'TT Norms Pro Variable',
      usage: '$font-family-tt-norms',
    }],
  },
}

export const Paragraph: Story = {
  args: {
    elements: [{
      name: '<p>',
      fontSize: 20,
      lineHeight: 24,
      weight: 344,
      usage: '@include bodyBase',
      content: '<p>This is the day of the expanding man. <strong>That shape is my shade</strong>, there where I used to stand. It seems like only yesterday <em>I gazed through the glass</em> at ramblers, wild gamblers; <a href="#">That\'s all in the past</a>. You call me a <sup>fool</sup>, you say it\'s a crazy <sub>scheme</sub>. This one\'s for real, I already bought the dream.So useless to ask me why, throw a kiss and say goodbye. I\'ll make it this time... I\'m ready to cross that fine line.</p><p>Learn to work the saxophone, I play just what I feel. Drink Scotch whiskey all night long... and die behind the wheel. They got a name for the winners in the world, I want a name when I lose, They call Alabama the Crimson Tide; call me Deacon Blues</p>',
    }],
  },
}

export const Links: Story = {
  args: {
    elements: [{
      name: '<a>',
      fontSize: 20,
      lineHeight: 24,
      weight: 344,
      content: '<p><a href="#">I am a link. Hover over me!</a></p>',
    }],
  },
}

export const TypeSizes: Story = {
  args: {
    elements: [
      {
        name: 'Header Desktop X-Large',
        fontSize: 64,
        lineHeight: 64,
        weight: 620,
        content: `<h1 class="headerDesktopXl">${defaultContent}</h1>`,
        usage: '@include headerDesktopXl',
      },
      {
        name: 'Header Desktop Large',
        fontSize: 52,
        lineHeight: 56,
        weight: 620,
        content: `<h1 class="headerDesktopLg">${defaultContent}</h1>`,
        usage: '@include headerDesktopLg',
      },
      {
        name: 'Header Desktop Medium',
        fontSize: 36,
        lineHeight: 40,
        weight: 7620,
        content: `<h1 class="headerDesktopMd">${defaultContent}</h1>`,
        usage: '@include headerDesktopMd',
      },
      {
        name: 'Header Desktop Small',
        fontSize: 26,
        lineHeight: 32,
        weight: 620,
        content: `<h1 class="headerDesktopSm">${defaultContent}</h1>`,
        usage: '@include headerDesktopSm',
      },
      {
        name: 'Header Mobile X-Large',
        fontSize: 52,
        lineHeight: 56,
        weight: 620,
        content: `<h1 class="headerMobileXl">${defaultContent}</h1>`,
        usage: '@include headerMobileXl',
      },
      {
        name: 'Header Mobile Large',
        fontSize: 40,
        lineHeight: 48,
        weight: 620,
        content: `<h1 class="headerMobileLg">${defaultContent}</h1>`,
        usage: '@include headerMobileLg',
      },
      {
        name: 'Header Mobile Medium',
        fontSize: 34,
        lineHeight: 40,
        weight: 620,
        content: `<h1 class="headerMobileMd">${defaultContent}</h1>`,
        usage: '@include headerMobileMd',
      },
      {
        name: 'Header Mobile Small',
        fontSize: 26,
        lineHeight: 32,
        weight: 620,
        content: `<h1 class="headerMobileSm">${defaultContent}</h1>`,
        usage: '@include headerMobileSm',
      },
      {
        name: 'Body 1',
        fontSize: 20,
        lineHeight: 32,
        weight: 344,
        content: `<p class="body1">${defaultContent}</p>`,
        usage: '@include body1',
      },
      {
        name: 'Body 2',
        fontSize: 20,
        lineHeight: 24,
        weight: 3500,
        letterSpacing: 0.5,
        content: `<p class="body2">${defaultContent}</p>`,
        usage: '@include body2',
      },
      {
        name: 'Body 3',
        fontSize: 20,
        lineHeight: 24,
        weight: 500,
        content: `<p class="body3">${defaultContent}</p>`,
        usage: '@include body3',
      },
      {
        name: 'Body 4',
        fontSize: 20,
        lineHeight: 24,
        weight: 233,
        content: `<p class="body4">${defaultContent}</p>`,
        usage: '@include body4',
      },
      {
        name: 'Body 5',
        fontSize: 16,
        lineHeight: 24,
        weight: 344,
        content: `<p class="body5">${defaultContent}</p>`,
        usage: '@include body5',
      },
      {
        name: 'Body 6',
        fontSize: 16,
        lineHeight: 24,
        weight: 620,
        content: `<p class="body6">${defaultContent}</p>`,
        usage: '@include body6',
      },
      {
        name: 'Body 7',
        fontSize: 14,
        lineHeight: 24,
        weight: 500,
        content: `<p class="body7">${defaultContent}</p>`,
        usage: '@include body7',
      },
      {
        name: 'Body 8',
        fontSize: 14,
        lineHeight: 24,
        weight: 344,
        content: `<p class="body8">${defaultContent}</p>`,
        usage: '@include body8',
      },
      {
        name: 'Body 9',
        fontSize: 14,
        lineHeight: 16,
        weight: 344,
        content: `<p class="body9">${defaultContent}</p>`,
        usage: '@include body9',
      },
    ],
  },
}

export const Headers: Story = {
  args: {
    elements: [
      {
        name: 'h1',
        fontSize: 64,
        lineHeight: 64,
        weight: 620,
        content: `<h1>${defaultContent}</h1>`,
        usage: '@include h1',
      },
      {
        name: 'h2',
        fontSize: 52,
        lineHeight: 56,
        weight: 620,
        content: `<h2>${defaultContent}</h2>`,
        usage: '@include h2',
      },
      {
        name: 'h3',
        fontSize: 36,
        lineHeight: 40,
        weight: 620,
        content: `<h3>${defaultContent}</h3>`,
        usage: '@include h3',
      },
      {
        name: 'h4',
        fontSize: 26,
        lineHeight: 32,
        weight: 620,
        content: `<h4>${defaultContent}</h4>`,
        usage: '@include h4',
      },
      {
        name: 'h5',
        fontSize: 20,
        lineHeight: 24,
        weight: 500,
        content: `<h5>${defaultContent}</h5>`,
        usage: '@include h5',
      },
      {
        name: 'h6',
        fontSize: 16,
        lineHeight: 24,
        weight: 620,
        content: `<h6>${defaultContent}</h6>`,
        usage: '@include h6',
      },
    ],
  },
}

export const HeadersWithLinksAndItalics: Story = {
  args: {
    elements: [
      {
        name: 'h1',
        fontSize: 64,
        lineHeight: 64,
        weight: 620,
        content: '<h1>A Header <a href="#">with a link</a> and some <em>italicized text</em> within.</h1>',
      },
      {
        name: 'h2',
        fontSize: 52,
        lineHeight: 56,
        weight: 620,
        content: '<h2>A Header <a href="#">with a link</a> and some <em>italicized text</em> within.</h2>',
      },
      {
        name: 'h3',
        fontSize: 36,
        lineHeight: 40,
        weight: 620,
        content: '<h3>A Header <a href="#">with a link</a> and some <em>italicized text</em> within.</h3>',
      },
      {
        name: 'h4',
        fontSize: 26,
        lineHeight: 32,
        weight: 620,
        content: '<h4>A Header <a href="#">with a link</a> and some <em>italicized text</em> within.</h4>',
      },
      {
        name: 'h5',
        fontSize: 20,
        lineHeight: 24,
        weight: 500,
        content: '<h5>A Header <a href="#">with a link</a> and some <em>italicized text</em> within.</h5>',
      },
      {
        name: 'h6',
        fontSize: 16,
        lineHeight: 24,
        weight: 620,
        content: '<h6>A Header <a href="#">with a link</a> and some <em>italicized text</em> within.</h6>',
      },
    ],
  },
}

export const Lists: Story = {
  args: {
    elements: [
      {
        name: 'ul',
        fontSize: 20,
        lineHeight: 24,
        weight: 344,
        content: '<ul><li>First Item</li><li>Second Item</li><li>Third Item</li><li>Here\'s a very long item here\'s a very long item here\'s a very long item here\'s a very long item here\'s a very long item here\'s a very long item here\'s a very long item</li><li>Parent Item<ul><li>Child item</li><li>Child item</li><li>Child item</li><li>Child item</li></ul></li><li>Last Item</li></ul>',
      },
      {
        name: 'ol',
        fontSize: 20,
        lineHeight: 24,
        weight: 344,
        content: '<ol><li>First Ordered Item</li><li>Second Ordered Item</li><li>Third Ordered Item</li><li>Here\'s a very long item here\'s a very long item here\'s a very long item here\'s a very long item here\'s a very long item here\'s a very long item here\'s a very long item</li><li>Parent Item<ol><li>Child item</li><li>Child item</li><li>Child item</li><li>Child item</li></ol></li><li>Last Ordered Item</li></ol>',
      },
      {
        name: 'dl',
        fontSize: 20,
        lineHeight: 24,
        weight: 344,
        content: '<dl><dt>Beast of Bodmin</dt><dd>A large feline inhabiting Bodmin Moor.</dd><dt>Morgawr</dt><dd>A sea serpent.</dd><dt>Owlman</dt><dd>A giant owl-like creature.</dd></dl>',
      },
    ],
  },
}

export const Quotes: Story = {
  args: {
    elements: [
      {
        name: 'blockquote',
        fontSize: 20,
        lineHeight: 24,
        weight: 344,
        content: '<figure><blockquote cite="https://genius.com/Steely-dan-deacon-blues-lyrics"><p>I cried when I wrote this song, Sue me if I play too long.</p></blockquote> <figcaption class="attribution">Steely Dan, <cite>Deacon Blues</cite></figcaption></figure>',
      },
    ],
  },
}

export const Code: Story = {
  args: {
    elements: [
      {
        name: 'code',
        fontSize: 20,
        lineHeight: 34,
        weight: 344,
        content: '<p>Here is an inline example of <code>text wrapped in an inline code</code> element.</p>',
      },
      {
        name: 'pre',
        fontSize: 20,
        lineHeight: 24,
        weight: 344,
        content: '<pre><code>Here is a whole block of code, unformatted but wrapped as a code block. Here is a whole block of code, unformatted but wrapped as a code block. Here is a whole block of code, unformatted but wrapped as a code block. Here is a whole block of code, unformatted but wrapped as a code block. Here is a whole block of code, unformatted but wrapped as a code block. Here is a whole block of code, unformatted but wrapped as a code block.</code>.</pre>',
      },
    ],
  },
}
