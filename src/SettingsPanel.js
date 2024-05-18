import React, { useState, useEffect } from 'react';
import './SettingsPanel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SettingsPanel = ({ selectedNode, setNodes }) => {
  const [label, setLabel] = useState('');
  const [isVisible, setIsVisible] = useState(true);



  const handleChange = (event) => {
    const newLabel = event.target.value;
    setLabel(newLabel);

    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === selectedNode.id) {
          return { ...node, data: { ...node.data, label: newLabel } };
        }
        return node;
      })
    );
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!selectedNode) {
    return null;
  }

  return (
    <aside className={`settings-panel ${isVisible ? '' : 'hidden'}`}>
      <div className="header">
        <button className="toggle-button" onClick={toggleVisibility}>
          {isVisible ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
        <div className="message">Message</div>
      </div>
      {isVisible && (
        <div className="content">
          <div className="label">Text</div>
          <input
            type="text"
            value={label}
            onChange={handleChange}
            placeholder="Enter text ...."
            style={ { height: '58px'}}
          />
        </div>
      )}
    </aside>
  );
};

export default SettingsPanel;
