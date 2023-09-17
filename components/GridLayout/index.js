import React from 'react';
import { GridWrapper } from './styled';

const GridLayout = ({
  columns,
  children,
  backgroundColor,
  gap,
  smallColumns,
  mediumColumns,
  largeColumns,
  horizontalMargin,
  verticalMargin,
  onGridClick,
}) => (
  <GridWrapper
    onClick={onGridClick}
    backgroundColor={backgroundColor}
    columns={columns}
    smallColumns={smallColumns}
    mediumColumns={mediumColumns}
    largeColumns={largeColumns}
    horizontalMargin={horizontalMargin}
    verticalMargin={verticalMargin}
    gap={gap}
  >
    {children}
  </GridWrapper>
);

GridLayout.defaultProps = {
  smallColumns: 1,
  mediumColumns: 2,
  largeColumns: 4,
  gap: 2,
  horizontalMargin: false,
  verticalMargin: false,
};

export default GridLayout;
