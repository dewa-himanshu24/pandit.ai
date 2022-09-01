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
    interface UserData {
      full_name: string,
      password_hash: string,
      email: string
    }
    const userData: UserData = {
      full_name: req.body.full_name,
      password_hash: req.body.password_hash,
      email: req.body.email
    }
    console.log(userData);
    prisma.bhakt.create({data :userData})
      .then(data => res.status(200).json({
        message: "Successfully registered"
      }))
      .catch(err => res.status(400).json({
        message: "Error while creating bhakt"
      }));
  }
}