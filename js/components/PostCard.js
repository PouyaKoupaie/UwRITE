export const PostCard = ({ title, excerpt, author, date }) => `
  <article class="post-card">
    <h2 class="post-card__title">${title}</h2>
    <p class="post-card__excerpt">${excerpt}</p>
    <div class="post-card__meta">
      <span>${author}</span>
      <time>${date}</time>
    </div>
  </article>
`;