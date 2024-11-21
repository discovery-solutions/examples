import * as React from 'https://discovery-solutions.github.io/react/dist/index.mjs';

React.register("qs-widget-search", () => {
  return React.render`
    <div class="card mb-4">
      <div class="card-header">Search</div>
      <div class="card-body">
        <div class="input-group">
          <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
          <button class="btn btn-primary" id="button-search" type="button">Go!</button>
        </div>
      </div>
    </div>
  `;
});
