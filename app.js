const express = require('express');
const app = express();

// Sample array of posts



const posts = [];
for(let i = 1; i <= 20; i++) {
    posts.push( { id: i, title: 'Post '+i },)
}

// Endpoint to get 20 posts
app.get('/', (req, res) => {
  res.send('<a href="/posts">click here 20 posts</a>');
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
