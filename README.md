# PoC for React Native
- Playground for learning about React Native
- https://reactnative.dev/
- https://github.com/facebook/react-native
    - [Good first issues](https://github.com/facebook/react-native/labels/good%20first%20issue)
- https://twitter.com/reactnative/
- [How A Small Team of Developers Created React at Facebook | React.js: The Documentary](https://www.youtube.com/watch?v=8pDqJVdNa44) - video, 80 minutes
- React Native apps may target iOS 13.4 and Android 6.0 (API 23) or newer. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS. Tools like [Expo](https://expo.dev/) can be used to work around this.
- [Recap about JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview)
- [Online Expo environment](https://snack.expo.dev/)
- [Environment setup](https://reactnative.dev/docs/environment-setup)

## Core components and Native components
- **React components**: bundles of reusable, nestable code. 
- **React Native Components** = Core Components + Community Components + Your Native Components
- A **view** is the basic building block of UI. Even the smallest visual elements of an app, like a line of text or a button, are kinds of views. Some kinds of views can contain other views.
- [Community-contributed React Components](https://reactnative.directory/)
- React Native comes with a set of essential, ready-to-use Native Components: Core Components.
- React Native uses the same API structure as React components.
- JSX is JavaScript. Any JavaScript expression will work between curly braces.
    - You can think of curly braces as creating a portal into JS functionality in your JSX!
- Any component that renders other components is a **parent component**. 
- **Props** is short for "properties". Props let you customize React components.
    - To pass a JS object in JSX, you must wrap the object in another pair of curly braces: `{{xxxx}}`
- **State**: While you can think of props as arguments you use to configure how components render, state is like a component’s personal data storage. State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!
    - A **Hook** is a kind of function that lets you “hook into” React features.
    - You can add state to a component by calling [React’s `useState` Hook](https://react.dev/learn/state-a-components-memory).
    - `[<getter>, <setter>] = useState(<initialValue>)`
- Swiping horizontally between views can also be implemented on Android using the **ViewPager** component.
- The **ScrollView** works best to present a small number of things of a limited size.
    - If you have a long list of items which cannot fit on the screen, you should use a **FlatList** instead. 
- [Troubleshooting](https://reactnative.dev/docs/troubleshooting)
- [**Platform-specific code**](https://reactnative.dev/docs/platform-specific-code): React Native provides two ways to organize your code and separate it by platform:
    - Using the Platform module.
        - React Native provides a module that detects the platform in which the app is running, e.g. `Platform.OS`.
    - Using platform-specific file extensions.
- **Expo** is a framework of tools and services for React Native that focuses on helping you build, ship, and iterate on your app, to use preview deployment workflows that are popular with web development, and to automate your development workflows. Expo also makes it possible to build React Native apps without ever touching Xcode or Android Studio, and it doesn't get in the way if you want to use those tools.
- **Example Apps**
    - [Showcase](https://reactnative.dev/showcase)
    - [Example apps on GitHub](https://github.com/ReactNativeNews/React-Native-Apps)

## React Fundamentals
- React Native runs on React.
- Core concepts: components, JSX, props, state


## My first RN app with Expo
1. `npx create-expo-app AwesomeProject`
1. `cd AwesomeProject`
1. `npx expo install react-native-web react-dom @expo/metro-runtime`
1. `npx run web`
1. `npx run android`
    - Install **Android Studio**
        - https://developer.android.com/studio?hl=es-419
        - https://developer.android.com/studio/install
        - https://developer.android.com/studio/run/emulator-acceleration?utm_source=android-studio#vm-linux
        - Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 14 (UpsideDownCake) SDK in particular. 
        - [Install Watchman](https://facebook.github.io/watchman/docs/install#buildinstall)
            - Watchman is a tool by Facebook for watching changes in the filesystem.
1. [Metro](https://facebook.github.io/metro/) is the JavaScript build tool for React Native. 

## Pending readings
- [Comprehensive guide to JSX](https://react.dev/learn/writing-markup-with-jsx)

## Tools
- [VS Studio extension for React Native](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)

## Expo
- [Video: Expo in 100 Seconds](https://www.youtube.com/watch?v=vFW_TxKLyrE)
- [Getting Started with React Native & Expo in 2024 (Typescript, Unit Tests, Styling, Expo Router, etc)](https://www.youtube.com/watch?v=Xb-HxFGayfY) - video, 16 min
  - https://github.com/thedevenvironment/expo-router-typescript


## Popular apps in React Native
- https://github.com/bluesky-social/social-app
- [Showcase](https://reactnative.dev/showcase)
  - Discord, Walmart, Instagram, Bloomberg
- https://infinite.red/top-react-native-apps
- [Curated list of Open Source React Native Apps](https://github.com/ReactNativeNews/React-Native-Apps)
  - [Joplin](https://github.com/laurent22/joplin) - 44k stars
  - [AR Cut & Paste](https://github.com/cyrildiagne/ar-cutpaste) - 14k stars
  - [Eigen](https://github.com/artsy/eigen) - 3.5k stars
    - There are some tests
  - [My Plants](https://github.com/benmotyka/my-plants_app)