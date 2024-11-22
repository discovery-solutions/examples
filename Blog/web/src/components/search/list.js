import { register, render, useState, useEffect } from 'https://discovery-solutions.github.io/react/dist/index.mjs';
import { fetcher } from '../../utils/fetcher.js';

register("qs-search-list", () => {
  const [ posts, setPosts ] = useState([]);
  const params = new URLSearchParams(document.location.search);
  const query = params.get('q');

  const fetchSearch = async () => {
    try {
      const { results } = await fetcher.get(`/system/search?query=${query}`);
      setPosts(results.post);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchSearch();
  }, []);
  
  if (!posts || posts.length === 0) {
    return render`
      <div class="mb-5 text-center">
        <h3 class="center">No results found for "${query}"</h3>
      </div>
    `;
  }
  
  return render`
    <div class="row">
      ${ posts.map((post) => render`
        <div class="col-lg-4">
          <qs-post-item data-post="${post}"></qs-post-item>
        </div>
      `)}
    </div>
  `;
});