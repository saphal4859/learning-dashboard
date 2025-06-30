import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ links, onSelectLink }) {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (index) => {
    // Toggle current, or switch to another
    setOpenCategory(prev => (prev === index ? null : index));
  };

  const handleMouseLeave = () => {
    setOpenCategory(null); // auto-close when sidebar is left
  };
console.log("Sidebar links received:", links);
   return (
    <aside className="sidebar-container" onMouseLeave={handleMouseLeave}>
      <div className="sidebar">
        <h2 className="logo">
          <span className="text">Topics</span>
        </h2>

        {links.map((cat, index) => (
          <div key={index} className="category" style={{ userSelect: 'none' }}>
            <div
              className={`category-title ${openCategory === index ? 'active' : ''}`}
              onClick={() => handleCategoryClick(index)}
              data-tooltip={cat.category}
            >
              <span className="icon">{cat.icon}</span>
              <span className="text">{cat.category}</span>
            </div>

            {openCategory === index && (
              <div className="menu-items">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="menu-link"
                    onClick={() => onSelectLink(item.url)}
                  >
                    <span className="menu-bullet">•</span>
                    <span className="text">{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;