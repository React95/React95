import React from 'react';
import type { SVGProps } from "react";

const Issue_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="olive" d="M13 0h9M11 1h2m9 0h2M9 2h2m13 0h1M8 3h1m16 0h1M7 4h1m18 0h1M6 5h1m19 0h2M5 6h1m20 0h1M5 7h1m19 0h2M4 8h1m19 0h3M4 9h1m7 0h2m10 0h3M4 10h1m6 0h3m10 0h3M4 11h1m6 0h2m11 0h3M4 12h1m6 0h1m12 0h2M4 13h1m19 0h1M4 14h1m10 0h1m7 0h1m-10 1h1m7 0h1m-10 1h1m7 0h1m-10 1h1m7 0h2m-10 1h1m7 0h2m-11 1h1m7 0h3m-11 1h1m7 0h3m-11 1h1m7 0h3m-11 1h1m7 0h2m-10 1h1m7 0h1m-9 1h1m1 1h5m1 0h2m-3 1h3m-2 1h2m-2 1h2m-2 1h1m-2 1h1" /><path stroke="silver" d="M13 1h1m1 0h1m2 0h1m1 0h2M12 2h1m1 0h1m1 0h1m2 0h1m1 0h3m-4 1h5m-3 1h4m-4 1h4m-3 1h3m-2 1h1m-7 18h1" /><path stroke="#fff" d="M14 1h1m1 0h2m1 0h1m-9 1h1m1 0h1m1 0h1m1 0h2m1 0h1M9 3h11M8 4h1m11 0h2M7 5h1M6 6h1M6 7h1M5 8h1M5 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m10 1h1m-2 1h1m-2 1h1m-2 1h1m-2 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#ff0" d="M9 4h11M8 5h14M7 6h16M7 7h17M6 8h18M6 9h6m4 0h8M6 10h5m6 0h7M6 11h5m6 0h7M6 12h5m6 0h7M6 13h5m6 0h7m-7 1h6m-7 1h6m-7 1h6m-7 1h6m-7 1h7m-7 1h6m-6 1h6m-6 1h6m-6 1h6m-6 1h6m-6 3h5m-6 1h7m-7 1h7m-7 1h7m-6 1h5" /><path stroke="#000" d="M27 6h1m-1 1h1m-1 1h1M14 9h2m11 0h1m-14 1h1m1 0h1m10 0h1m-15 1h1m13 0h1m-16 1h1m13 0h1m-16 1h1m13 0h1M5 14h6m13 0h1m-2 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1m-9 1h9m0 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1m-7 1h6" /><path stroke="gray" d="M16 11h1m-1 1h1m-1 1h1m-5 13h1m-2 1h1m-1 1h1m-1 1h1m0 1h1" /></svg>;
const Issue_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="olive" d="M6 0h6M4 1h2m6 0h1M3 2h1m8 0h2M2 3h1m9 0h1M2 4h1m3 0h1m1 0h1m3 0h1M2 5h1m3 0h1m5 0h1M2 6h1m5 0h1m3 0h1M7 7h1m3 0h1M6 8h1m3 0h1M6 9h1m3 0h1m-5 1h1m3 0h1m-4 2h3m-4 1h1m3 0h1m-5 1h1m3 0h1" /><path stroke="#fff" d="M6 1h4" /><path stroke="silver" d="M10 1h2M4 2h1m6 0h1M3 3h1m6 9h1" /><path stroke="#ff0" d="M5 2h6M4 3h8M3 4h3m3 0h3M3 5h3m3 0h3M9 6h3M8 7h3M7 8h3M7 9h3m-3 1h3m-3 3h3m-3 1h3" /><path stroke="#000" d="M13 3h1M7 4h1m5 0h1M7 5h2m4 0h1M3 6h4m6 0h1m-2 1h1m-2 1h1m-1 1h1m-1 1h1m-6 1h5m0 1h1m-1 1h1m-1 1h1m-5 1h4" /></svg>;

export const issueData = {
  '32x32_4': Issue_32x32_4,
  '16x16_4': Issue_16x16_4
};

export interface IssueProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Issue: React.FC<IssueProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = issueData[variant];

  return <Svg {...rest} />;
};
