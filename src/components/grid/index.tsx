import React, { FC, Children } from 'react';

import { createFullGrid } from 'utils';

import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
  const grid = createFullGrid();
  console.log(grid);

  return (
    <Container data-cy='grid-container'>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          // eslint-disable-next-line react/jsx-key
          <Row data-cy='grid-row-container'>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                // eslint-disable-next-line react/jsx-key
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
