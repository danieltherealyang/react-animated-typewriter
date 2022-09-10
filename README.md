
# react-animated-typewriter

> The ```react-animated-typewriter``` package is a quick and easy way to implement a typewriter animation component without needing to write any CSS animations or React state management code yourself. 
> This package is based on react-typical and supersets its interface.
[![NPM](https://img.shields.io/npm/v/react-animated-typing.svg)](https://www.npmjs.com/package/react-animated-typing) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-animated-typewriter
```

## Usage

```jsx
import Typing from 'react-animated-typewriter';

function AnimatedTyping() {
  const wait = 1500;
  return (
    <Typing
      steps={[
        'React', wait,
        'C++', wait,
        'Java', wait,
        'Python', wait
      ]}
      loop={Infinity}
      wrapper="b"
      typeDelay={100}
      deleteDelay={10}
    />
  );
}
```

## Props
| Name | Required | Type | Description | Example | Default
| -- | -- | -- | -- | -- | -- |
| ```steps``` | Yes | array | Determines words to animate and time to wait after typing a word | ```['React', 1000, 'C++', 'Python']``` | None
| ```wrapper``` | No | string | Element to wrap text in | ```'b'``` | ```<span></span>```
| ```loop``` | No | number | Number of times to iterate through steps array | ```5``` | ```1```
| ```typeDelay``` | No | number | Delay in ms after each character when typing | ```100``` | ```50```
| ```deleteDelay``` | No | number | Delay in ms after deleting each character |```10``` | ```50```

## License

GNU GPL v3 © [danieltherealyang](https://github.com/danieltherealyang)
