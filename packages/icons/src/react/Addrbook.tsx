import React from 'react';
import type { SVGProps } from "react";

const Addrbook_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M2 2h4m3 0h4M0 3h3m3 0h1m1 0h1m3 0h3M0 4h1m1 0h1m1 0h2m1 0h1m4 0h1m1 0h1M0 5h1m1 0h1m3 0h2m1 0h2m1 0h3M0 6h1m1 0h1m1 0h2m1 0h2m3 0h1m1 0h1M0 7h1m1 0h1m3 0h2m1 0h2m1 0h3M0 8h1m1 0h1m4 0h2m3 0h1m1 0h1M0 9h1m1 0h1m1 0h2m1 0h1m4 0h3M0 10h1m1 0h1m3 0h2m4 0h1m1 0h1M0 11h1m1 0h4m1 0h1m1 0h6M0 12h1m5 0h3m5 0h1M0 13h15" /><path stroke="#fff" d="M3 3h3m3 0h3M3 4h1m2 0h1m1 0h4M3 5h3m2 0h1m2 0h1M3 6h1m2 0h1m2 0h3m1 0h1M3 7h3m2 0h1m2 0h1M3 8h4m2 0h3M3 9h1m2 0h1m1 0h4m-9 1h3m2 0h4m-6 1h1m1 0h1" /><path stroke="silver" d="M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m11 0h1" /><path stroke="red" d="M13 4h1" /><path stroke="#ff0" d="M13 8h1" /><path stroke="#0ff" d="M13 10h1" /><path stroke="gray" d="M2 12h4m3 0h4" /></svg>;

export const addrbookData = {
  '16x16_4': Addrbook_16x16_4
};

export interface AddrbookProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Addrbook: React.FC<AddrbookProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = addrbookData[variant];

  return <Svg {...rest} />;
};
