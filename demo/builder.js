export const listIcons = (icons, html, options = {width: 50, height: 50, hidden: 0}) => {
  let demos = [];
  for (let icon in icons) {
    if (icon === 'setCustomTemplateLiteralTag') continue;
    demos.push(html`
      <div>
        <div>${icons[icon](options)}</div>
        <span>${icon}</span>
      </div>
    `);
  }
  return demos;
}
