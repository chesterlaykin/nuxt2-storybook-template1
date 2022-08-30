Nuxt2 + storybook test

# Installed dependencies + configurations

## **Nuxt 2**

Nuxt 2 (Created with `yarn create nuxt-app` )

## **Storybook**

### **@nuxtjs/storybook**

Storybook for Nuxt 2

### **Gitignore**

Added to gitignore:

.nuxt-storybook

storybook-static

### **Command: yarn nuxt storybook**

Command `yarn nuxt storybook` was run, which generated the **.nuxt-storybook** folder.

### **Command: yarn nuxt storybook eject**

Command `yarn nuxt storybook eject` was run, which generated the ".storybook" folder

### **main.js**

main.js in ".storybook" was edited:

```text
stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
```

^ pointing to a location for the stories (in this case a "stories" folder was created (can be changed))