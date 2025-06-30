// App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import sidebarLinks from "./components/sidebarLinks";
import ChatWidget from "./ChatWidget";

function App() {
  const [iframeLink, setIframeLink] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
     <>
    <div
      className="app-header"
      onClick={() => {
        setIframeLink(null);
        setExpandedCategory(null);
      }}
    >
      <h1 className="app-title">📚 My Learning Hub</h1>
    </div>
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
            />
          ) : (
            <div style={{ width: "100%" }}>
              <h2 className="welcome">
                Welcome and <span className="highlight">Happy Learning!</span>
              </h2>
              <div className="category-container">
                {sidebarLinks.map((section) => (
                  <div key={section.category} className="category-section">
                    <button
                      className="category-button"
                      onClick={() => handleCategoryClick(section.category)}
                    >
                      {section.icon} {section.category}
                    </button>

                    {expandedCategory === section.category && (
                      <div className="child-links">
                        {section.items.map((item) => (
                          <button
                            key={item.name}
                            className="child-link"
                            onClick={() => setIframeLink(item.url)}
                          >
                            📘 {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <ChatWidget />
    </div>
     </>
  );
}

export default App;
