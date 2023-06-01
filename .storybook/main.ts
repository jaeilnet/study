import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-styling",
      options: {
        sass: {
          implementation: require("sass"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: { nextConfigPath: "../next.config.js" },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
