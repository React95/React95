import React from 'react';
import type { SVGProps } from "react";

const Italic_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M7 4h5M8 5h2M8 6h2M7 7h2M7 8h2M6 9h2m-2 1h2m-3 1h2m-4 1h6" /><path stroke="gray" d="M10 5h1M7 6h1m1 1h1M6 8h1m1 1h1m-4 1h1m1 1h1" /></svg>;

export const italicData = {
  '16x16_4': Italic_16x16_4
};

export interface ItalicProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Italic: React.FC<ItalicProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = italicData[variant];

  return <Svg {...rest} />;
};
