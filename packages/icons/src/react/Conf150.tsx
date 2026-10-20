import React from 'react';
import type { SVGProps } from "react";

const Conf150_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M12 0h2m-2 1h2M8 2h2m2 0h2M8 3h2m2 0h2M4 4h2m2 0h2m2 0h2M4 5h2m2 0h2m2 0h2M0 6h2m2 0h2m2 0h2m2 0h2M0 7h2m2 0h2m2 0h2m2 0h2M0 8h2m2 0h2m2 0h2m2 0h2M0 9h2m2 0h2m2 0h2m2 0h2M4 10h2m2 0h2m2 0h2M4 11h2m2 0h2m2 0h2m-6 1h2m2 0h2m-6 1h2m2 0h2m-2 1h2m-2 1h2" /></svg>;

export const conf150Data = {
  '16x16_4': Conf150_16x16_4
};

export interface Conf150Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf150Component = ({
  variant = '16x16_4',
  ...rest
}: Conf150Props) => {
  const Svg = conf150Data[variant];

  return <Svg {...rest} />;
};

export const Conf150 = React.memo(Conf150Component);
Conf150.displayName = 'Conf150';
