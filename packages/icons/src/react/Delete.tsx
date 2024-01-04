import React from 'react';
import type { SVGProps } from "react";

const Delete_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M2 2h3m9 0h1M2 3h4m6 0h2M3 4h4m4 0h2M5 5h3m2 0h2M6 6h5M7 7h3M6 8h5M5 9h3m2 0h2m-8 1h3m4 0h2M3 11h3m6 0h1M2 12h4m7 0h1M2 13h3m-2 1h1m10 0h1" /></svg>;

export const deleteData = {
  '16x16_4': Delete_16x16_4
};

export interface DeleteProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Delete: React.FC<DeleteProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = deleteData[variant];

  return <Svg {...rest} />;
};
