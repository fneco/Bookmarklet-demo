import { JSDOM } from "jsdom";

export const toDocument = (html: string) => new JSDOM(html).window.document;
