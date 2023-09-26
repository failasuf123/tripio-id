import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { q: query } = req.query;

      if (typeof query !== 'string') {
        throw new Error('Invalid Request');
      }

      const getPosts = await axios.get('http://localhost:8000/api/get_tempat_wisata');
      const posts = getPosts.data; // Data tempat wisata dari API
      const filteredPosts = posts.filter((post: any) =>
        post.nama.toLowerCase().includes(query.toLowerCase())
      );
      console.log("the data isss",getPosts.data)

      res.status(200).json({ posts: filteredPosts });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
