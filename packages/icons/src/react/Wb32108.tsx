import React from 'react';
import type { SVGProps } from "react";

const Wb32108_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M7 1h4M4 2h3m3 0h1M2 3h2m4 0h2M0 4h2m5 0h9M0 5h2m13 0h2M0 6h2m7 0h7M0 7h2m10 0h1M0 8h2m6 0h5M0 9h2m9 0h1M0 10h3m4 0h5M0 11h5m5 0h1m-9 1h9m-7 1h6" /><path stroke="#fff" d="M7 2h3M4 3h4M2 4h5M2 5h13M2 6h7M2 7h10M2 8h6M2 9h9m-8 1h4m-2 1h5" /></svg>;

export const wb32108Data = {
  '32x32_4': Wb32108_32x32_4
};

export interface Wb32108Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wb32108Component = ({
  variant = '32x32_4',
  ...rest
}: Wb32108Props) => {
  const Svg = wb32108Data[variant];

  return <Svg {...rest} />;
};

export const Wb32108 = React.memo(Wb32108Component);
Wb32108.displayName = 'Wb32108';
