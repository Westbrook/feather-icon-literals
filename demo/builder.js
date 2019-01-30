export const listIcons = (icons, html) => {
  let demos = [];
  for (let icon in icons) {
    if (icon === 'setCustomTemplateLiteralTag') continue;
    demos.push(html`
      <div>
        <div>${icons[icon]()}</div>
        <span>${icon}</span>
      </div>
    `);
  }
  return demos;
}
