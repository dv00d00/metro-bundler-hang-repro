// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// NativeWind integration with cleaned CSS
module.exports = withNativeWind(config, {
  input: './global.css',
  configPath: './tailwind.config.js',
});
