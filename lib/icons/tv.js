import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Tv = () =>
  html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class="feather feather-tv"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  `;
