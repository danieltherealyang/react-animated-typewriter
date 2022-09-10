import React from 'react'

import Typing from 'react-animated-typing'

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
      typeDelay={100}
      deleteDelay={10}
    />
  );
}

export default App
