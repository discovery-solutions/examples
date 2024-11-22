import { register, render } from 'https://discovery-solutions.github.io/react/dist/index.mjs';
import { useEntities } from '../../utils/hooks.js';

register("qs-category-list", () => {
  const params = new URLSearchParams(document.location.search);
  const id = params.get('id');

  if (id === null)
    return render`<div style="height: 100px"><h4>Category not found</h4></div>`;

  const [posts] = useEntities('post', { category: id });
  
  return render`
    <div class="container">
      <div class="row h-100">
        ${ posts.map((post) => render`
          <div class="col-lg-6">
            <qs-post-item data-post="${post}"></qs-post-item>
          </div>
        `)}
      </div>
    </div>
  `;
});