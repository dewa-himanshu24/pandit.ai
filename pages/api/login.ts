import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
  message: string,
  xBhaktToken : any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    interface UserData {
      password_hash: string,
      email: string
    }
    const userData: UserData = {
      password_hash: req.body.password_hash,
      email: req.body.email
    }
    console.log(userData);
    const tData = prisma.bhakt.findFirst({where : userData})
    console.log(tData)
      tData
      .then(data => res.status(200).json({
        message: "Successfully loggedin",
        xBhaktToken : data?.id
      }))
      .catch(err => res.status(400).json({
        message: "Something went wrong",
        xBhaktToken: undefined
      }));
  }
}