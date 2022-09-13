import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

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

    const full_name = req.body.full_name.trim();
    const password = req.body.password.trim();
    const email = req.body.email.trim().toLowerCase();
    
    const saltRounds = 10;

    if (email.length === 0 || full_name.length === 0 || password.length === 0) {
      res.status(400).json({ message: "Enter valid input" });
    }
    const hashed_password = bcrypt.hash(password, saltRounds).then((hashed_password: string) => {
      console.log(`Hashed Password is ${hashed_password}`);
      const bhaktData: BhaktData = {
        full_name: full_name,
        password_hash: hashed_password,
        email: email
      }
  
      prisma.bhakt.create({ data: bhaktData })
        .then(data => res.status(200).json({
          message: "Successfully registered"
        }))
        .catch((err) => {
          console.log(err);
          res.status(400).json({
            message: "Something went wrong"
          })
        });
    });
  }
}