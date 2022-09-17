import type { NextApiRequest, NextApiResponse } from 'next'
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client';
import { PrismaClientInitializationError } from '@prisma/client/runtime';

// const dummyPoojaList = {
//   allPooja: [
//     {
//       id: 1,
//       name: "Daily Aarti",
//       imageUrl: "https://images.tv9hindi.com/wp-content/uploads/2022/05/aarti-rules.jpg?w=360"

//     },
//     {
//       id: 2,
//       name: "Radha Krishna Aarti",
//       imageUrl: "https://c4.wallpaperflare.com/wallpaper/250/51/742/radha-krishna-radha-krishna-wallpaper-preview.jpg"
//     },
//     {
//       id: 3,
//       name: "Shiv Aarti",
//       imageUrl: "https://i.ytimg.com/vi/MXDTEwxkU_I/maxresdefault.jpg"
//     },
//     {
//       id: 4,
//       name: "Hanuman Aarti",
//       imageUrl: "https://images.herzindagi.info/image/2022/Apr/hanuman-jayanti-MAIN.jpg"

//     },
//     {
//       id: 5,
//       name: "Durga Aarti",
//       imageUrl: "https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1539759878/1539759877.jpg"
//     },
//     {
//       id: 6,
//       name: "Ganesha Aarti",
//       imageUrl: "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/08/30/197590-bappac5.jpg?itok=QgO45zhx"
//     },
//     {
//       id: 7,
//       name: "Vishnu Aarti",
//       imageUrl: "https://www.bhaktiras.net/wp-content/uploads/2020/06/Shri-Vishnu-Mantra.png"

//     },
//     {
//       id: 8,
//       name: "Ram  Aarti",
//       imageUrl: "https://www.digpu.com/wp-content/uploads/2021/04/Untitled-design-2021-04-21T100918.876.jpg"
//     },
//     {
//       id: 9,
//       name: "laxmi Aarti",
//       imageUrl: "https://wallpaperaccess.com/full/1971315.png"
//     }
//   ]
// }

const prisma = new PrismaClient()

const secret = process.env.APP_AUTH_JWT_SECRET + "";

type Data = {
  message?: string,
  allPooja?: Array<{ id: number; title: string; imageUrl: string }>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const xBhaktToken = req.headers['x-bhakt-token'] + "";
    try {
      jwt.verify(xBhaktToken, secret);
      const allPooja = await prisma.pooja.findMany({});
      const poojaList = {allPooja: allPooja}
      res.status(200).json(poojaList);
    } catch (err) {
      console.log(err)
      if (err instanceof PrismaClientInitializationError) {
        res.status(405).json({ message: "Internal error" });
      } else if (err instanceof JsonWebTokenError) {
        res.status(401).json({ message: "Authentication Error" });
      } else {
        res.status(400).json({ message: "Something went wrong" });
      }
    }
  }
  else {
    res.status(400).json({ message: "HTTP method not supported!" });
  }
}