declare module "*.md" {
  const html: string;
  const attributes: Record<string, unknown>;
  export { html, attributes };
}
