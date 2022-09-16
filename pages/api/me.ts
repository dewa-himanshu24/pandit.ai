import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import { PrismaClientInitializationError } from '@prisma/client/runtime'

const prisma = new PrismaClient()

type Data = {
  full_name?: string | null | undefined,
  email?: string | undefined,
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const xBhaktToken = req.headers['x-bhakt-token'] + "";
    const secret = process.env.APP_AUTH_JWT_SECRET + "";
    try {
      const decoded = jwt.verify(xBhaktToken, secret);
      const bhakt = await prisma.bhakt.findFirst({ where: { id: Number(decoded.sub) } });
      const userDetails = {
        full_name: bhakt?.full_name,
        email: bhakt?.email
      }
      res.status(200).json(userDetails);
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
  } else {
    res.status(400).json({
      message: "HTTP method not supported!"
    })
  }
}