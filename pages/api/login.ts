import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

type Data = {
  message: string,
  xBhaktToken?: any
  decoded?: any
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
          }
          const secret = "panditaijwttoken";

          const payload = {
            email: data.email,
            id: data.id
          }

          const xBhaktToken = jwt.sign(payload, secret, {expiresIn: '1s'});
          console.log(jwt.verify(xBhaktToken,secret));

          res.status(200).json({
            message: "Successfully loggedin",
            xBhaktToken: xBhaktToken,
            decoded: jwt.verify(xBhaktToken,secret)
          });
        }))
      .catch(err => res.status(400).json({
        message: "Something went wrong",
      }));

  }
}