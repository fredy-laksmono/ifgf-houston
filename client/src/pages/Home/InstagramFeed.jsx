import React, { useState, useEffect } from 'react';

function InstagramFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}&limit=9`);
      const data = await response.json();
      setPosts(data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
        <h3 className=' text-2xl font-bold'> Latest Posts </h3>
      {posts.map((post) => (
        <div key={post.id}>
          {post.media_type === "VIDEO" ? (
            <video src={post.media_url} alt={post.caption} />
          ) : (
            <img src={post.media_url} alt={post.caption} />
          )}
          <p>{post.caption}</p>
          <a href={post.permalink}>View on Instagram</a>
        </div>
      ))}
    </div>
  );
}

export default InstagramFeed;
