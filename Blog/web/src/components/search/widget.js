import * as React from 'https://discovery-solutions.github.io/react/dist/index.mjs';

React.register("qs-widget-search", () => {
  const params = new URLSearchParams(document.location.search);
  const query = params.get('q') || '';

  return React.render`
    <div class="card mb-4">
      <div class="card-header">Search</div>
      <form class="card-body" action="search.html">
        <div class="input-group">
          <input name="q" value="${query}" class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
          <button class="btn btn-primary" id="button-search" type="submit">Go!</button>
        </div>
      </form>
    </div>
  `;
});
