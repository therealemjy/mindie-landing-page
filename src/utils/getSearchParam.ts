export default (href: string, param: string) => {
  const url = new URL(href);
  return url.searchParams.get(param);
};
