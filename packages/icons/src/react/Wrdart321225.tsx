import React from 'react';
import type { SVGProps } from "react";

const Wrdart321225_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h32M0 7h32M0 8h13m6 0h13M0 9h10m12 0h10M0 10h6m20 0h6M0 11h5m22 0h5M0 12h5m22 0h5M0 13h5m22 0h5M0 14h5m22 0h5M0 15h5m22 0h5M0 16h5m22 0h5M0 17h5m22 0h5M0 18h5m22 0h5M0 19h5m22 0h5M0 20h5m22 0h5M0 21h32M0 22h32M0 23h32M0 24h32M0 25h32M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M13 8h6m-9 1h12M6 10h20M5 11h22M5 12h22M5 13h22M5 14h22M5 15h22M5 16h22M5 17h22M5 18h22M5 19h22M5 20h22" /></svg>;

export const wrdart321225Data = {
  '32x32_4': Wrdart321225_32x32_4
};

export interface Wrdart321225Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321225Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321225Props) => {
  const Svg = wrdart321225Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321225 = React.memo(Wrdart321225Component);
Wrdart321225.displayName = 'Wrdart321225';
