import React, { FC, Children } from 'react';

const Grid: FC = () => {
  // Other stuff on the way

  return (
    <div data-cy='grid-container'>
      {Children.toArray(
        [...Array(9)].map(() => (
          // eslint-disable-next-line react/jsx-key
          <div data-cy='grid-row-container'>
            {Children.toArray(
              // eslint-disable-next-line react/jsx-key
              [...Array(9)].map(() => <div data-cy='block'></div>)
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Grid;
