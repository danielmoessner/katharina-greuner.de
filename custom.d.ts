import "react";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

declare module "*.md" {
  const html: string;
  const attributes: Record<string, unknown>;
  export { html, attributes };
}

declare module "decap-cms-core" {
  export type CmsConfig = Record<string, unknown>;

  export type CmsFieldBase = Record<string, unknown>;
  export type CmsField = Record<string, unknown>;
  export type CmsFieldObject = Record<string, unknown>;

  export type CmsCollection = Record<string, unknown>;
  export type CmsCollectionFile = Record<string, unknown>;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // CCM: any;
  }
}
