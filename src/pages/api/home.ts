import type { NextApiRequest, NextApiResponse } from 'next'



export default function homeApi  (
    req: NextApiRequest,
    res: NextApiResponse<{ message: string }>,
) {
    return res.status(200).json({
        message: 'Hello world',
      })
}