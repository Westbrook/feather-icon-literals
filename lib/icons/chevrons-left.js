import { tag as html } from '../custom-tag.js';

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronsLeft = () =>
  html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class="feather feather-chevrons-left"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="11 17 6 12 11 7" />
      <polyline points="18 17 13 12 18 7" />
    </svg>
  `;
