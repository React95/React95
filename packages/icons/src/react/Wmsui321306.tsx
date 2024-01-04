import React from 'react';
import type { SVGProps } from "react";

const Wmsui321306_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M0 21h10M0 22h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M10 21h1m-1 1h1m-7 1h4m2 0h1m-6 1h3m2 0h1m-7 1h4m2 0h1m-8 1h3m1 0h1m2 0h1m-8 1h2m5 0h1m-8 1h1m6 0h1m-7 1h1m5 0h1m-1 1h1M1 31h10" /><path stroke="#fff" d="M1 22h9m-9 1h3m4 0h2m-9 1h4m3 0h2m-9 1h3m4 0h2m-9 1h2m3 0h1m1 0h2m-9 1h2m2 0h5m-9 1h2m1 0h6m-9 1h3m1 0h5m-9 1h9" /></svg>;
const Wmsui321306_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M0 21h11M0 22h1m9 0h1M0 23h1m3 0h4m2 0h1M0 24h1m4 0h3m2 0h1M0 25h1m3 0h4m2 0h1M0 26h1m2 0h3m1 0h1m2 0h1M0 27h1m2 0h2m5 0h1M0 28h1m2 0h1m6 0h1M0 29h1m3 0h1m5 0h1M0 30h1m9 0h1M0 31h11" /><path stroke="#fff" d="M1 22h9m-9 1h3m4 0h2m-9 1h4m3 0h2m-9 1h3m4 0h2m-9 1h2m3 0h1m1 0h2m-9 1h2m2 0h5m-9 1h2m1 0h6m-9 1h3m1 0h5m-9 1h9" /></svg>;
const Wmsui321306_32x16_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 16" width="1em" height="1em" {...props}><path stroke="#000" d="M0 6h11M0 7h1m9 0h1M0 8h1m3 0h4m2 0h1M0 9h1m4 0h3m2 0h1M0 10h1m3 0h4m2 0h1M0 11h1m2 0h3m1 0h1m2 0h1M0 12h1m2 0h2m5 0h1M0 13h1m2 0h1m6 0h1M0 14h1m9 0h1M0 15h11" /><path stroke="#fff" d="M1 7h9M1 8h3m4 0h2M1 9h4m3 0h2m-9 1h3m4 0h2m-9 1h2m3 0h1m1 0h2m-9 1h2m2 0h5m-9 1h2m1 0h6m-9 1h9" /></svg>;

export const wmsui321306Data = {
  '32x32_4': Wmsui321306_32x32_4,
  '32x32_1': Wmsui321306_32x32_1,
  '32x16_1': Wmsui321306_32x16_1
};

export interface Wmsui321306Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '32x32_1' | '32x16_1';
}

export const Wmsui321306: React.FC<Wmsui321306Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wmsui321306Data[variant];

  return <Svg {...rest} />;
};
