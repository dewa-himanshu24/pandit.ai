import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const dummyPoojaList = {
  allPooja: [
    {
      id: 1,
      name: "Daily Aarti",
      imageUrl: "https://images.tv9hindi.com/wp-content/uploads/2022/05/aarti-rules.jpg?w=360"

    },
    {
      id: 2,
      name: "Radha Krishna Aarti",
      imageUrl: "https://www.thedivineindia.com/img/shri-radha-ji-ki-aarti.jpg"
    },
    {
      id: 3,
      name: "Shiv Aarti",
      imageUrl: "https://i.ytimg.com/vi/MXDTEwxkU_I/maxresdefault.jpg"
    },
    {
      id: 4,
      name: "Daily Aarti",
      imageUrl: "https://images.tv9hindi.com/wp-content/uploads/2022/05/aarti-rules.jpg?w=360"

    },
    {
      id: 5,
      name: "Radha Krishna Aarti",
      imageUrl: "https://www.thedivineindia.com/img/shri-radha-ji-ki-aarti.jpg"
    },
    {
      id: 6,
      name: "Shiv Aarti",
      imageUrl: "https://i.ytimg.com/vi/MXDTEwxkU_I/maxresdefault.jpg"
    },
    {
      id: 7,
      name: "Daily Aarti",
      imageUrl: "https://images.tv9hindi.com/wp-content/uploads/2022/05/aarti-rules.jpg?w=360"

    },
    {
      id: 8,
      name: "Radha Krishna Aarti",
      imageUrl: "https://www.thedivineindia.com/img/shri-radha-ji-ki-aarti.jpg"
    },
    {
      id: 9,
      name: "Shiv Aarti",
      imageUrl: "https://i.ytimg.com/vi/MXDTEwxkU_I/maxresdefault.jpg"
    }
  ]
}


const secret = process.env.APP_AUTH_JWT_SECRET + "";


type Data = {
  message?: string,
  allPooja?: Array<{ id: number; name: string; imageUrl: string }>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const xBhaktToken = req.headers['x-bhakt-token'] + "";

    try {
      jwt.verify(xBhaktToken, secret);
      res.status(200).json(dummyPoojaList);

    } catch (err) {
      console.log(err);
      res.status(401).json({ message: "Error while authentication" })
    }
  }
  else {
    res.status(400).json({ message: "HTTP method not supported!" });
  }
}