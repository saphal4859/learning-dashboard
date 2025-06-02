import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ links, onSelectLink }) {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <aside className="sidebar">
      <h2 className="logo">LearnHub</h2>
      {links.map((cat, index) => (
        <div key={index} className="category" style={{ userSelect: 'none' }}>
          <div
            className="category-title"
            onClick={() => setOpenCategory(openCategory === index ? null : index)}
          >
            {cat.icon} {cat.category}
          </div>
          {openCategory === index && (
            <div className="menu-items">
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  className="menu-link"
                  onClick={() => onSelectLink(item.url)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="menu-bullet">•</span> {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;