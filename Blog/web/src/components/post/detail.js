import { register, render } from 'https://discovery-solutions.github.io/react/dist/index.mjs';
import { useEntitiy } from '../../utils/hooks.js';

register("qs-post-detail", () => {
  const params = new URLSearchParams(document.location.search);
  const id = params.get('id');

  if (id === null)
    return render`<div>Post not found</div>`;

  const [post] = useEntitiy('post', id);

  if (!post)
    return render`<div>Loading content...</div>`;

  const lastUpdated = (new Date(post.updatedAt)).toLocaleDateString("en-US", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return render`
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-8">
          <article>
            <header class="mb-4">
              <h1 class="fw-bolder mb-1">${post.title}</h1>
              <div class="text-muted fst-italic mb-2">Last update on ${lastUpdated}</div>
              <p>
                <small class="fw-lighter mb-2"><span class="fw-light">Author:</span> ${post?.author?.name}</small>
              </p>

              <div class="d-flex gap-2">
                ${post?.tags?.map((tag) => render`
                  <a class="badge bg-secondary text-decoration-none link-light" href="search.html?query=${tag}">${tag}</a>
                `)}
              </div>
            </header>
            <figure class="mb-4"><img class="img-fluid rounded" src="${post.banner || "https://dummyimage.com/900x400/ced4da/6c757d.jpg"}" alt="..." /></figure>
            <section class="mb-5">
              <p class="fs-5 mb-4">${post.content}</p>
            </section>
          </article>
          
          ${post?.comments?.length > 0 ? '<qs-post-comments></qs-post-comments>' : ''}
        </div>
            
        <div class="col-lg-4">
          <qs-widget-search></qs-widget-search>
          <qs-widget-categories></qs-widget-categories>
          <qs-widget-tags></qs-widget-tags>
        </div>
      </div>
    </div>
  `;
});