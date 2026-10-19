import React from 'react';
import type { SVGProps } from "react";

const Wrdart321222_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h32M0 7h32M0 8h32M0 9h32M0 10h32M0 11h32M0 12h5m23 0h4M0 13h5m23 0h4M0 14h5m23 0h4M0 15h5m23 0h4M0 16h5m23 0h4M0 17h5m23 0h4M0 18h5m23 0h4M0 19h5m23 0h4M0 20h5m23 0h4M0 21h5m8 0h7m8 0h4M0 22h5m5 0h13m5 0h4M0 23h5m3 0h17m3 0h4M0 24h32M0 25h32M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M5 12h23M5 13h23M5 14h23M5 15h23M5 16h23M5 17h23M5 18h23M5 19h23M5 20h23M5 21h8m7 0h8M5 22h5m13 0h5M5 23h3m17 0h3" /></svg>;

export const wrdart321222Data = {
  '32x32_4': Wrdart321222_32x32_4
};

export interface Wrdart321222Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321222Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321222Props) => {
  const Svg = wrdart321222Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321222 = React.memo(Wrdart321222Component);
Wrdart321222.displayName = 'Wrdart321222';
