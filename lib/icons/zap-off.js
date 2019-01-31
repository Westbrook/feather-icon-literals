import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ZapOff = (
  { width: width, height: height, hidden: hidden, title: title, desc: desc } = {
    width: 24,
    height: 24,
    hidden: false,
    title: 'Zap Off',
    desc: 'Zap Off',
  },
) =>
  html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      title="${title}"
    >
      <title>${title}</title>
      <desc>${desc}</desc>
      <polyline points="12.41 6.75 13 2 10.57 4.92" />
      <polyline points="18.57 12.91 21 10 15.66 10" />
      <polyline points="8 8 3 14 12 14 11 22 16 16" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  `;
