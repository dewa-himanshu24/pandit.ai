import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

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
    const xBhaktToken = req.headers['x-bhakt-token']+"";
    const secret = process.env.APP_AUTH_JWT_SECRET+""
    try {
      const decoded = jwt.verify(xBhaktToken, secret);
      console.log(decoded);
      const bhakt = await prisma.bhakt.findFirst({ where: { id: decoded.id } });
      const userDetails = {
        full_name: bhakt?.full_name,
        email: bhakt?.email
      }
      res.status(200).json(userDetails);
    } catch (err) {
      console.log(err);
      res.status(401).json({ message: "Error while authentication" });
    }
  }
  else {
    res.status(400).json({
      message: "Something went wrong"
    })
  }
}