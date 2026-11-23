import React from 'react';
import type { SVGProps } from "react";

const CdfviewLogogleam_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M0 0h14M0 1h4m1 0h8M0 2h2m1 0h1m1 0h1m1 0h5M0 3h3m3 0h5M0 4h1m3 0h1m3 0h2M0 5h3m3 0h3M0 6h2m1 0h1m1 0h1m1 0h1M0 7h4m1 0h2M0 8h6M0 9h5m-5 1h4m-4 1h3m-3 1h2m-2 1h1" /><path stroke="#fff" d="M4 1h1M2 2h1m1 0h1m1 0h1M3 3h3M1 4h3m1 0h3M3 5h3M2 6h1m1 0h1m1 0h1M4 7h1" /></svg>;

export const cdfviewLogogleamData = {
  '32x32_4': CdfviewLogogleam_32x32_4
};

export interface CdfviewLogogleamProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const CdfviewLogogleamComponent = ({
  variant = '32x32_4',
  ...rest
}: CdfviewLogogleamProps) => {
  const Svg = cdfviewLogogleamData[variant];

  return <Svg {...rest} />;
};

export const CdfviewLogogleam = React.memo(CdfviewLogogleamComponent);
CdfviewLogogleam.displayName = 'CdfviewLogogleam';
