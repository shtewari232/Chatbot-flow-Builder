import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import './NodesPanel.css';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const NodesPanel = () => {
  // Function to handle drag start event
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    // Nodes panel component
    <aside className="nodes-panel">
      {/* Drag and drop node */}
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, 'textNode')}
        draggable
      >
        {/* Node icon */}
        <span style={{ display: 'block', justifyContent: 'center', marginTop: '20px' }}>
          <MessageOutlinedIcon />
        </span>
        {/* Node label */}
        <span style={{ display: 'block', marginTop: '4px' }}>Message</span>
      </div>
    </aside>
  );
};

export default NodesPanel;
