declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
