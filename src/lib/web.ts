export const toDocument = (html: string) =>
  new DOMParser().parseFromString(html, "text/html");
