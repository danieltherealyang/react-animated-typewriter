import React from 'react'

import Typing from 'react-animated-typing'
import 'react-animated-typing/dist/index.css'

const App = () => {
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
    />
  );
}

export default App
