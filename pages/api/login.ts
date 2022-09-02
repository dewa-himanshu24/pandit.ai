import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
  message: string,
  xBhaktToken: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {\

    const password = req.body.password.trim()
    const email = req.body.email.trim().length > 12 ? req.body.email.trim().toLowerCase() : " ";
    
    prisma.bhakt.findFirstOrThrow({ where: { email: email, password_hash: password } })
      .then(data => res.status(200).json({
        message: "Successfully loggedin",
        xBhaktToken: data?.id
      }))
      .catch(err => res.status(400).json({
        message: "Something went wrong",
        xBhaktToken: undefined
      }));
  }
}