# vue-lite-toast

Vue.js toast notification plugin for vue 3

## Installation

```bash
# npm
npm install @meforma/vue-toaster
```

## Import

```js
// In you main.js
// ... considering that your app creation is here
import Toast from "@vue-lite-toast";

createApp(App).use(Toast).mount("#app");
```

## Usage

```js
// this.$toast.show(message, {/* options */});
this.$toast.show(`Hello world`);
this.$toast.success(`Hello world`);
this.$toast.error(`Hello world`);
this.$toast.warning(`Hello world`);
this.$toast.info(`Hello world`);
```

## Available options

The API methods accepts these options:

| Attribute |   Type   | Default | Description                                        |
| :-------- | :------: | :-----: | :------------------------------------------------- |
| message   |  String  |   --    | Message text/html (required)                       |
| type      |  String  | `info`  | One of `success`, `info`, `warning`, `error`       |
| duration  |  Number  | `2500`  | Visibility duration in milliseconds                |
| onClose   | Function |   --    | Do something after toast gets dismissed            |
| lock      | Boolean  | `true`  | Prevent users from manipulating pages during toast |

## API methods

### `show(message, ?options)`

This is generic method, you can use this method to make any kind of toast.

```js
// Can accept a message as string and apply rest of options from defaults
this.$toast.show("Hello!");

// Can accept an Object of options.
// If yout don't pass options, the default toast will be showed

this.$toast.show("Something went wrong!", {
  type: "error",
  // all of other options may go here
});

this.$toast.show("Something stay longer!", {
  duration: 4000,
  // all of other options may go here
});
```

### `success(message,?options)`

There are some proxy methods to make it more readable. The same rule for `error`, `info` and `warning` methods

```js
this.$toast.success("Congratulations on your success", {
  // optional options Object
});
```

## License

[MIT](LICENSE.txt) License
