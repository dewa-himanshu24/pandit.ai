import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  full_name: string,
  email: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const userDetails = {
      full_name: "Himanshu Dewangan",
      email: "dewa@gamil.com"
    }
    res.status(200).json(userDetails);
  }
}