import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    interface BhaktData {
      full_name: string,
      password_hash: string,
      email: string
    }

    const full_name = req.body.full_name.trim().length > 0 ? req.body.full_name.trim() : undefined;
    const password_hash = req.body.password.trim()
    const email = req.body.email.trim().length > 12 ? req.body.email.trim().toLowerCase() : undefined;

    const bhaktData: BhaktData = {
      full_name: full_name,
      password_hash: password_hash,
      email: email
    }
    console.log(bhaktData);
    prisma.bhakt.create({data : bhaktData})
      .then(data => res.status(200).json({
        message: "Successfully registered"
      }))
      .catch(err => res.status(400).json({
        message: "Something went wrong"
      }));
  }
}