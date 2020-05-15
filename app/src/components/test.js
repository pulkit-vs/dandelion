import React from 'react';
import { ReactSortable } from 'react-sortablejs';

export const App = () => {
  const [state, setState] = useState([{ id: 1, name: 'shrek' }, { id: 2, name: 'fiona' }]);

  return (
    <ReactSortable
      // here they are!
      group='groupName'
      animation={200}
      delayOnTouchStart={true}
      delay={2}
    >
      {state.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
  );
};
