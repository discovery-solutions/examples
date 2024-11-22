import { register, render } from 'https://discovery-solutions.github.io/react/dist/index.mjs';
import { useEntities } from '../../utils/hooks.js';

register("qs-post-list", () => {
  const [raw, pagination ] = useEntities('post');
  const mainPost = raw.pop();
  const posts = raw.slice(1);
  
  if (!mainPost)
    return render`<div style="height: 100px"><h4>Loading content...</h4></div>`;
  
  return render`
    <div>
      <qs-post-item data-post="${mainPost}"></qs-post-item>

      <div class="row mt-4">
        ${ posts.map((post) => render`
          <div class="col-lg-6">
            <qs-post-item data-post="${post}"></qs-post-item>
          </div>
        `)}
      </div>
      
      ${pagination ? (render`
        <nav aria-label="Pagination">
          <hr class="my-0" />
          <ul class="pagination justify-content-center my-4">
            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
            <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
            <li class="page-item"><a class="page-link" href="#!">2</a></li>
            <li class="page-item"><a class="page-link" href="#!">3</a></li>
            <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
            <li class="page-item"><a class="page-link" href="#!">15</a></li>
            <li class="page-item"><a class="page-link" href="#!">Older</a></li>
          </ul>
        </nav>
      `) : ''}
    </div>
  `;
});