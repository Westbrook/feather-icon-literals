export const listIcons = (icons, html) => {
  let demos = [];
  for (let icon in icons) {
    if (icon === 'setCustomTemplateLiteralTag') continue;
    demos.push(html`
      <div>
        <div>${icons[icon]({width: 50, height: 50, hidden: 1})}</div>
        <span>${icon}</span>
      </div>
    `);
  }
  return demos;
}
