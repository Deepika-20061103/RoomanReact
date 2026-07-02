import React from 'react';
import Parent from './Parent';

const GrandParent = (props) => {
  return (
    <div>
      <Parent value={props.value} />
    </div>
  );
};

export default GrandParent;