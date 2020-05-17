import React, { FC, Children } from 'react';

import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
  // Other stuff on the way

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
