import * as React from 'https://discovery-solutions.github.io/react/dist/index.mjs';
import { useEntities } from '../utils/hooks.js';

React.register("qs-widget-categories", () => {
  const [categories] = useEntities('category');
  
  if (categories.length === 0) return React.render`<div></div>`;

  return React.render`
    <div class="card mb-4">
      <div class="card-header">Categories</div>
      <div class="card-body">
        <div class="row">
          ${categories.map((category) => React.render`
            <div class="col-sm-6">
              <ul class="list-unstyled mb-0">
                <li><a href="category.html?id=${category.id}">${category.name}</a></li>
              </ul>
            </div>
          `)}
        </div>
      </div>
    </div>
  `;
});
