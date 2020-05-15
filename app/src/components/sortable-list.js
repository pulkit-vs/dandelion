import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export function SortableList(ticketName, ticketId, ticketIcon, assignedTo, priority) {
  return (
    <div
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          minWidth: '200px',
          alignItems: 'center',
        }}
      >
        <Avatar alt='avatar' src={ticketIcon} style={{ height: '20px', width: '20px', marginRight: '20px' }} />
        <label style={{ cursor: 'pointer' }}>{ticketName}</label>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          minWidth: '150px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Avatar alt='avatar' src={assignedTo} style={{ height: '26px', width: '26px' }} />
        <label style={{ cursor: 'pointer' }}>{ticketId}</label>
        <img src={assignedTo} alt style={{ height: '20px', width: '20px' }} />
      </div>
    </div>
  );
}
