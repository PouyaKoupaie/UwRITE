import { PostCard } from '../components/PostCard.js';

const posts = [
    {
        title: 'Post 1',
        excerpt: 'This is the first post',
        author: 'John Doe',
        date: '2024-01-01'
    },
    {
        title: 'Post 2',
        excerpt: 'This is the second post',
        author: 'Jane Doe',
        date: '2024-01-02'
    },
    {
        title: 'Post 3',
        excerpt: 'This is the third post',
        author: 'John Doe',
        date: '2024-01-03'
    }
];

export const Home = () => `
  <main class="home">
    <h1>Welcome</h1>
    <section class="posts-grid">
      ${posts.map(post => PostCard(post)).join('')}
    </section>
  </main>
`;