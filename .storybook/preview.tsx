import React from 'react'
import type { Preview } from "@storybook/react";
import '../app/(frontend)/styles/globals.scss'
import localFont from 'next/font/local'

const ttNorms = localFont({
	src: [
		{
			path: '../app/fonts/TT_Norms_Pro_Variable.woff2',
		},
	],
	fallback: ['sans-serif'],
	variable: '--tt-norms',
})

const preview: Preview = {
	decorators: [
		(Story) => (
			<div className={ttNorms.variable}>
				<Story />
			</div>
		),
	],
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
