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
    const user = await prisma.user.findFirst();
    const userDetails = {
      full_name: user?.full_name,
      email: user?.email
    }
    res.status(200).json(userDetails);
  }
}