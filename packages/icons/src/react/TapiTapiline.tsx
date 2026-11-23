import React from 'react';
import type { SVGProps } from "react";

const TapiTapiline_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M0 0h32M0 2h15m1 0h16M14 3h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h2m1 0h2m-5 1h1m3 0h1M9 8h13M8 9h1m13 0h1M8 10h1m13 0h1M8 11h1m13 0h1M8 12h1m13 0h1M8 13h1m13 0h1M8 14h15M8 15h2m11 0h2M9 16h1m11 0h1M9 17h1m11 0h1M9 18h1m11 0h1M9 19h1m11 0h1M9 20h1m11 0h1M9 21h1m11 0h1M9 22h1m11 0h1M9 23h13m-12 1h4m3 0h4m-8 1h2m1 0h2m-4 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1" /><path stroke="silver" d="M0 1h32M15 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 19h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M14 7h2M9 9h13M9 10h13M9 11h13M9 12h13M9 13h13m-12 3h11m-11 1h5m1 0h5m-11 1h4m3 0h4m-11 1h3m5 0h3m-11 1h4m3 0h4m-11 1h4m3 0h4m-11 1h11m-7 2h2" /><path stroke="gray" d="M16 7h1m-7 8h11m-5 9h1" /><path stroke="red" d="M15 17h1m-2 1h3m-4 1h5m-4 1h3m-3 1h3" /></svg>;

export const tapiTapilineData = {
  '32x32_4': TapiTapiline_32x32_4
};

export interface TapiTapilineProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const TapiTapilineComponent = ({
  variant = '32x32_4',
  ...rest
}: TapiTapilineProps) => {
  const Svg = tapiTapilineData[variant];

  return <Svg {...rest} />;
};

export const TapiTapiline = React.memo(TapiTapilineComponent);
TapiTapiline.displayName = 'TapiTapiline';
