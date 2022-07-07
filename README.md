# BufWrapperMinecraftPlugin

A [BufWrapper](https://github.com/MinecraftJS/BufWrapper) plugin that adds all the Minecraft datatypes read and write methods.

# Install the plugin

```javascript
const { BufWrapper } = require('@minecraft-js/bufwrapper');
const BufWrapperMinecraftPlugin = require('@minecraft-js/bufwrapperminecraftplugin');

// Instanciate the BufWrapper instance
// with the plugin. The plugin is in the `mc`
// property of the object so the plugin is
// "renamed" for easier access
const buf = new BufWrapper(null, {
  plugins: { mc: BufWrapperMinecraftPlugin },
});

// You can access the methods from the plugin
// using the `BufWrapper#plugins` property
buf.plugins.mc.writeByte(42);
```
