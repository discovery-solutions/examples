import { QuickServer } from '@discovery-solutions/quick-server';
import path from 'path';

const qs = new QuickServer(path.join(process.cwd(), 'api/SERVER.yaml'));
const server = qs.get('DevBlog-API');

server.get('/post/tags', async (ctx) => {
  const posts = await server.database.get('post');
  const tags = new Set();

  for (const post of posts)
    post.tags.forEach(tag => tags.add(tag));
  
  return ctx.send(Array.from(tags));
});

qs.start();