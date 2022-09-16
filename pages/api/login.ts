import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import { PrismaClientInitializationError } from '@prisma/client/runtime'

const prisma = new PrismaClient()

type Data = {
  message: string,
  xBhaktToken?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const password = req.body.password.trim();
    const email = req.body.email.trim().toLowerCase();

    prisma.bhakt.findFirstOrThrow({ where: { email: email } })
      .then(data =>
        bcrypt.compare(password, data.password_hash).then((match) => {
          if (!match) {
            res.status(400).json({
              message: "Wrong Credential!",
            })
            return;
          }
          const secret = process.env.APP_AUTH_JWT_SECRET + "";

          const payload = {
            email: data.email,
            sub: data.id
          }

          const xBhaktToken = jwt.sign(payload, secret, { expiresIn: '1 day' });
          console.log(`User ${data.id} successfully logged in`)

          res.status(200).json({
            message: "Successfully loggedin",
            xBhaktToken: xBhaktToken,
          });
        }))
      .catch(err => {
        console.log(err)
        if(err instanceof PrismaClientInitializationError){
          res.status(500).json({message: "Internal Server Error"});
        } else if(err instanceof JsonWebTokenError) {
          res.status(400).json({message: "Authentication Error"});
        } else {
          res.status(400).json({message: "Something went wrong"});
        }
      });
  }
  else {
    res.status(400).json({ message: "HTTP method not supported!" });
  }
}