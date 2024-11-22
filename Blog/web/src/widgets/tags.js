import * as React from 'https://discovery-solutions.github.io/react/dist/index.mjs';
import { useTags } from '../utils/hooks.js';

React.register("qs-widget-tags", () => {
  const [tags] = useTags();
  
  if (tags.length === 0) return React.render`<div></div>`;

  return React.render`
    <div class="card mb-4">
      <div class="card-header">Tags</div>
      <div class="card-body">
        <div class="row">
          ${tags.map((tag) => React.render`
            <div class="col-sm-6">
              <ul class="list-unstyled mb-0">
                <li><a href="search.html?q=${tag}">${tag}</a></li>
              </ul>
            </div>
          `)}
        </div>
      </div>
    </div>
  `;
});
