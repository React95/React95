import React from 'react';
import type { SVGProps } from "react";

const Wrdart321201_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h32M0 7h32M0 8h32M0 9h32M0 10h32M0 11h32M0 12h26m4 0h2M0 13h24m6 0h2M0 14h21m6 0h5M0 15h19m6 0h7M0 16h16m7 0h9M0 17h14m6 0h12M0 18h11m7 0h14M0 19h9m6 0h17M0 20h6m7 0h19M0 21h4m7 0h21M0 22h2m6 0h24M0 23h2m4 0h26M0 24h32M0 25h32M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M26 12h4m-6 1h6m-9 1h6m-8 1h6m-9 1h7m-9 1h6m-9 1h7m-9 1h6m-9 1h7m-9 1h7m-9 1h6m-6 1h4" /></svg>;

export const wrdart321201Data = {
  '32x32_4': Wrdart321201_32x32_4
};

export interface Wrdart321201Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Wrdart321201Component = ({
  variant = '32x32_4',
  ...rest
}: Wrdart321201Props) => {
  const Svg = wrdart321201Data[variant];

  return <Svg {...rest} />;
};

export const Wrdart321201 = React.memo(Wrdart321201Component);
Wrdart321201.displayName = 'Wrdart321201';
