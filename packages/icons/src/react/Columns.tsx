import React from 'react';
import type { SVGProps } from "react";

const Columns_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="#000" d="M1 3h6m1 0h6M1 5h6m1 0h6M1 7h6m1 0h6M1 9h6m1 0h6M1 11h6m1 0h6M1 13h6m1 0h6" /></svg>;

export const columnsData = {
  '16x16_4': Columns_16x16_4
};

export interface ColumnsProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Columns: React.FC<ColumnsProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = columnsData[variant];

  return <Svg {...rest} />;
};
