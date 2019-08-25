import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Twitch = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Twitch',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
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
      aria-labelledby="${`title-twitch-${count}`}"
      aria-describedby="${`title-twitch-${count}`}"
    >
      <title id="${`title-twitch-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-twitch-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </svg>
  `;
};
