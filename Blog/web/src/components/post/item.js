import { register, render } from 'https://discovery-solutions.github.io/react/dist/index.mjs';

register("qs-post-item", ({ post }) => {
  if (!post) return render`<div></div>`;
  
  return render`
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
});