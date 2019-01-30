# Feather Icon Literals

Access a growing family of icons for use across varied project contexts via tagged template literals. By default these icons are delivered via what amounts to a pass through tag, allowing the various icons to be used as if they were vanilla strings.

```
import { Circle } from 'feather-icon-literals';

console.log(Circle());

/***
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  class="feather feather-circle"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="10" />
</svg>
***/
```

However, if you're already working with a specific parser on your project, you can apply that parser here to be sure that the SVG content is delivered as parsed content to your final template. The means if you were working with lit-html you could apply the `html` tag to your icons via `setCustomTemplateLiteralTag`:

```
import { Circle, setCustomTemplateLiteralTag } from 'feather-icon-literals';
import { html } from 'lit-html';

setCustomTemplateLiteralTag(html);

console.log(Circle());

/***
TemplateResult {strings: Array[1], values: Array[0], type: "html", processor: DefaultTemplateProcessor, constructor: Object}
***/
```

Similar could be said about Preact via the `htm` tag as bound to the provided hyperscript function:

```
import { Circle, setCustomTemplateLiteralTag } from 'feather-icon-literals';
import htm from 'htm';
import { h } from 'preact';

const hPreact = htm.bind(h);

setCustomTemplateLiteralTag(hPreact);

console.log(Circle());

/***
VNode {nodeName: "svg", children: Array[1], attributes: Object, key: undefined, constructor: Object}
***/
```

This goes on and on for whatever tagged template based template parser you might apply now (or in the future) in building your application. That means that you can now use the same icons across multiple projects, between multiple teams, and over whatever refactoring requirements might come you way in the future.


## Feather Icons

[Feather Icons](https://feathericons.com/) provide a collection of simply beautiful open source icons for use in your website or application. This ever growing collection of high quality SVG based icons is brought to the community by [@colebemis](https://twitter.com/colebemis) and provides an invaluable tool for visually communicating functionality and intent across your work.

## Tagged Template Literals

The template literal brings quality string templating to the JS ecosystem, demarcated by back tickets "\`" and allowing the use of embedded expressions. These literals can be parsed with a function via "tagging", which will pass the template as an array of static string values followed by arguments related to the various expressions embedded in the literal. This allows tools like [HTM](https://github.com/polymer/lit-html), [hyperHTML](https://github.com/WebReflection/hyperHTML), and [lit-html](https://github.com/polymer/lit-html) to rely on platform standard technologies to parse templating for use with various renderers.

### Prior Art

There are [many projects](https://github.com/feathericons/feather#related-projects) that work to make using Feather Icons more easily in your projects/frameworks (including the [default implementation](https://github.com/feathericons/feather#usage)). In particular, `feather-icon-literals` borrows much from the work of [Carmelo Pullara](https://github.com/carmelopullara) in [`react-feather`](https://github.com/feathericons/react-feather) which coverts the Feather Icons in the functional React components. You will find much in common between the build process applied between the two projects, and for the learning I have taken from that process I would like to thank Carmelo profusely.
