import { register, render } from 'https://discovery-solutions.github.io/react/dist/index.mjs';

register("qs-post-item", ({ post }) => {
  if (!post) return render`<div></div>`;
  const link = `post.html?id=${post.id}`;
  
  return render`
    <div class="card mb-4">
      <a href="${link}">
        <img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="${post.title}" />
      </a>
      <div class="card-body">
        <div class="small text-muted">January 1, 2023</div>
        <a class="card-title link-dark" href="${link}">
          <h2>${post.title}</h2>
        </a>
        <p class="card-text">${post?.content?.slice(0, 100)}</p>
        <a class="btn btn-primary" href="${link}">Ver mais →</a>
      </div>
    </div>
  `;
});