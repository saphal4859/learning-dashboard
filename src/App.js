// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import sidebarLinks from './components/sidebarLinks';
import ChatWidget from './ChatWidget';
const links = [
  {
     category: 'Spring security',
    icon: '🔐',
    items: [
      { name: 'Basics', url: 'https://doc.clickup.com/90131482853/d/h/2ky42j75-533/ca07030e2429cf0' },
      { name: 'Default Authentication', url: 'https://doc.clickup.com/90131482853/d/h/2ky42j75-553/0a739ac5293d50c' },
      { name: 'Basic Authentication', url: 'https://doc.clickup.com/90131482853/d/h/2ky42j75-593/6b62f047d3d0067' },
      { name: 'In memory and JDBC Authentication', url: 'https://doc.clickup.com/90131482853/d/h/2ky42j75-613/1cd0b851d1eaf05' },
      { name: 'Hashing and Password Encoder', url: 'https://doc.clickup.com/90131482853/d/h/2ky42j75-633/ec4b1ec9b2e8ca1' },
    ]
  },
  {
    category: 'Microservices',
    icon: '🧩',
    items: []
  }
];
function App() {
  const [iframeLink, setIframeLink] = useState(null);

  return (
    <div className="layout">
      <Sidebar links={links} onSelectLink={setIframeLink} />
      <main className="main-content">
        <div className="page-content">
          {iframeLink ? (
            <iframe src={iframeLink} title="Learning Content" width="100%" height="100%" style={{ border: 'none', marginTop: '-20px' }} />
          ) : (
            <h2 className="welcome">Welcome and <span className="highlight">Happy Learning!</span></h2>
          )}
        </div>
      </main>
       <ChatWidget />
    </div>
  );
}

export default App;