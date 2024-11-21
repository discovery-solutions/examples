import { register, render } from 'https://discovery-solutions.github.io/react/dist/index.mjs';
import { useEntities } from '../../utils/hooks.js';

const renderPostCard = ({ post }) => `
  <div class="card mb-4">
    <a href="post.html?id=${post.id}">
      <img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="${post.title}" />
    </a>
    <div class="card-body">
      <div class="small text-muted">January 1, 2023</div>
      <h2 class="card-title">${post.title}</h2>
      <p class="card-text">${post?.content?.slice(0, 100)}</p>
      <a class="btn btn-primary" href="post.html?id=${post.id}">Ver mais →</a>
    </div>
  </div>
`;

register("qs-post-list", () => {
  const [raw, pagination ] = useEntities('post');
  const posts = raw.slice(1);
  const mainPost = raw[0];
  
  if (!mainPost) return render`<div></div>`;
  
  return render`
    <div>
      ${ renderPostCard({ post: mainPost }) }

      <div class="row">
        ${ posts.map((post) => render`
          <div class="col-lg-6">
            ${ renderPostCard({ post }) }
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