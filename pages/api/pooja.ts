import type { NextApiRequest, NextApiResponse } from 'next'
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client';
import { PrismaClientInitializationError } from '@prisma/client/runtime';


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
      const poojaList = { allPooja: allPooja }
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