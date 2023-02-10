import React, { useState } from 'react';

function Header() {
  const [hide, display] = useState(true);
  const [buttonText, setButtonText] = useState('Hide');

  return (
    <div>
      <button onClick={() => {
        display(!hide);
        setButtonText(hide ? 'Show' : 'Hide');
      }}>
        {buttonText}
      </button>
      {hide && <h1>This is the Header Component</h1>}
    </div>
  );
}

export default Header;