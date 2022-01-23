import React from 'react';
// import it
import useTypingGame from 'react-typing-game-hook';

const TypingGameComponent = (props) => {
  // Call the hook
  const {
    states: { chars, charsState },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame(props.word);

  // Capture and display!
  return (
    <div
      onKeyDown={e => {
        const key = e.key;
        if (key === 'Escape') {
          resetTyping();
        } else if (key === 'Backspace') {
          deleteTyping(false);
        } else if (key.length === 1) {
          insertTyping(key);
        }
        e.preventDefault();
      }}
      tabIndex={0}
    >
      {chars.split('').map((char, index) => {
        let state = charsState[index];
        let color = state === 0 ? 'black' : state === 1 ? 'green' : 'red';
        return (
          <span key={char + index} style={{ color }}>
            {char}
          </span>
        );
      })}
    </div>
  );
};
export default TypingGameComponent;