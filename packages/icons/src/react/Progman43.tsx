import React from 'react';
import type { SVGProps } from "react";

const Progman43_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M11 2h11M10 3h13M10 4h13M10 5h13M10 6h13M10 7h13M10 8h13M10 9h13m-13 1h13m-13 1h13m-13 1h13m-13 1h13M2 14h28M2 15h28M3 16h26M4 17h24M5 18h22M6 19h20M7 20h18M8 21h16M9 22h14m-13 1h12m-11 1h10m-9 1h8m-7 1h6m-5 1h4m-3 1h2" /></svg>;
const Progman43_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M11 2h11M10 3h1m11 0h1M10 4h1m11 0h1M10 5h1m11 0h1M10 6h1m11 0h1M10 7h1m11 0h1M10 8h1m11 0h1M10 9h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1M2 14h9m11 0h8M2 15h1m26 0h1M3 16h1m24 0h1M4 17h1m22 0h1M5 18h1m20 0h1M6 19h1m18 0h1M7 20h1m16 0h1M8 21h1m14 0h1M9 22h1m12 0h1m-13 1h1m10 0h1m-11 1h1m8 0h1m-9 1h1m6 0h1m-7 1h1m4 0h1m-5 1h1m2 0h1m-3 1h2" /><path stroke="#fff" d="M11 3h10M11 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-8 1h8m10 0h6" /><path stroke="gray" d="M21 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 15h1m17 0h1m6 0h1M4 16h2m20 0h2M5 17h2m18 0h2M6 18h2m16 0h2M7 19h2m14 0h2M8 20h2m12 0h2M9 21h2m10 0h2m-13 1h2m8 0h2m-11 1h2m6 0h2m-9 1h2m4 0h2m-7 1h2m2 0h2m-5 1h4m-3 1h2" /><path stroke="silver" d="M12 4h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9M6 16h20M7 17h18M8 18h16M9 19h14m-13 1h12m-11 1h10m-9 1h8m-7 1h6m-5 1h4m-3 1h2" /></svg>;

export const progman43Data = {
  '32x32_1': Progman43_32x32_1,
  '32x32_4': Progman43_32x32_4
};

export interface Progman43Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Progman43: React.FC<Progman43Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const Svg = progman43Data[variant];

  return <Svg {...rest} />;
};
