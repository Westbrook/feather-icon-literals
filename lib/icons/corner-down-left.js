import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CornerDownLeft = () =>
  html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class="feather feather-corner-down-left"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 10 4 15 9 20" />
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
    </svg>
  `;
