import React, { FC, Children, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { INDEX } from 'typings';

import { createGrid } from 'reducers';

import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);

  useEffect(() => {
    create();
  }, [create]);

  return (
    <Container data-cy='grid-container'>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          // eslint-disable-next-line react/jsx-key
          <Row data-cy='grid-row-container'>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                // eslint-disable-next-line react/jsx-key
                <Block
                  colIndex={colIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
