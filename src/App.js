// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import sidebarLinks from './components/sidebarLinks';
import ChatWidget from './ChatWidget';
function App() {
  const [iframeLink, setIframeLink] = useState(null);

  return (
    <div className="layout">
      <Sidebar links={sidebarLinks} onSelectLink={setIframeLink} />
      <main className="main-content">
        <div className="page-content">
          {iframeLink ? (
            <iframe
              src={iframeLink}
              title="Learning Content"
              width="100%"
              height="100%"
              style={{ border: 'none', marginTop: '-20px' }}
            />
          ) : (
            <h2 className="welcome">
              Welcome and <span className="highlight">Happy Learning!</span>
            </h2>
          )}
        </div>
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;
