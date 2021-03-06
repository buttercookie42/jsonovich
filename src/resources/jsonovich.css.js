/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-env browser */
'use strict';

// browser.tabs.insertCSS from background at same time as executeScript => "An unexpected error occurred"
// <link> inserted from content script or page script => doesn't load
// hence this file has been converted from CSS to JS, which loads fine
{
const css = `
body, .json {
  margin:0;
  padding:0;
}
.json {
  font-family:monospace;
  white-space:pre-wrap;
  color:#666;
  display:table;
  counter-reset:line;
}
.json .line {
  display:table-row;
  counter-increment:line;
}
.json .line:nth-of-type(even) {
  background-color:#fafaff;
}
.json .line:nth-of-type(odd) {
  background-color:#fafffa;
}
.json .line:hover > .gutter {
  background-color:#eeeebb;
}
.json .line:hover > code {
  background-color:#ffffcc;
}
.json .gutter, .json code {
  margin:0;
  padding:0;
  display:table-cell;
}
.json .gutter {
  text-align:right;
  background-color:#eee;
}
.json .foldable {
  cursor:vertical-text;
}
.json .foldable.toggled {
  cursor:row-resize;
  background-color:#fa7;
}
.json .foldable.toggled > .gutter {
  background-color:#ea8;
}
.json .foldable.toggled > code {
  background-color:#fb9;
}
.json .foldable.toggled:hover > .gutter {
  background-color:#ecb;
}
.json .foldable.toggled:hover > code {
  background-color:#fdc;
}
.json .folded.line {
  visibility:collapse;
}
.json .foldable .fold.gutter:before {
  content:'-';
}
.json .foldable.toggled .fold.gutter:before {
  content:'+';
}
.json .foldable.toggled code:first-of-type:after {
  content:' \\2026 ';
}
.json .number.gutter:before {
  content:counter(line);
}
.json code {
  text-align:left;
}
.json code .string > .content {
  color:#080;
}
.json code .key {
  color:#008;
}
.json code .boolean {
  color:#066;
}
.json code .number {
  color:#066;
}
.json code .null {
  color:#066;
}
.json code .delimiter {
  color:#660;
}
.json code .key.delimiter {
  position:absolute;
  top:0;
  left:-1000em;
}
.json code .separator {
  color:#660;
}

@media print {
  .json code .string > .content {
    color:#060;
  }
  .json code .key {
    color:#006;
    font-weight:bold;
  }
  .json code .boolean {
    color:#044;
  }
  .json code .number {
    color:#044;
  }
  .json code .null {
    color:#044;
  }
  .json code .delimiter {
    color:#440;
  }
  .json code .separator {
    color:#440;
  }
}

.error {
  background-color:#f46;
  padding:0.5em;
  font-weight:bold;
}
`;

const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);
}
