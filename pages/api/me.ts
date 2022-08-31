import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
  
  full_name: string | null |undefined,
  email: string | undefined,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const xBhaktToken = req.headers['x-bhakt-token'];
    const bhakt = await prisma.bhakt.findFirst({where: { id: Number(xBhaktToken) }});
    const userDetails = {
      full_name: bhakt?.full_name,
      email: bhakt?.email
    }
    res.status(200).json(userDetails);
  }
}