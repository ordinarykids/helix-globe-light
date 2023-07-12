import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../app/**/components/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"storybook-css-modules",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	staticDirs: [{
		from: '../app/\(frontend\)/fonts',
		to: '/app/fonts',
	},
		'../public',]
};
export default config;
