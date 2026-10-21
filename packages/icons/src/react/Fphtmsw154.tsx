import React from 'react';
import type { SVGProps } from "react";

const Fphtmsw154_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M11 14h10m-9 1h8m-7 1h6m-5 1h4m-3 1h2" /><path stroke="#fff" d="M20 15h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /></svg>;

export const fphtmsw154Data = {
  '32x32_4': Fphtmsw154_32x32_4
};

export interface Fphtmsw154Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Fphtmsw154Component = ({
  variant = '32x32_4',
  ...rest
}: Fphtmsw154Props) => {
  const Svg = fphtmsw154Data[variant];

  return <Svg {...rest} />;
};

export const Fphtmsw154 = React.memo(Fphtmsw154Component);
Fphtmsw154.displayName = 'Fphtmsw154';
