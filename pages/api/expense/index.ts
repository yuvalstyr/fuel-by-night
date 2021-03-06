import { format, formatISO } from "date-fns"
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../utils/prisma"

// POST /api/expense
// Required fields in body: date, name, cost
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { date, name, cost, investmentTypeId: id } = req.body

  const result = await prisma.expense.create({
    data:{
      name,
      date,
      cost,
      InvestmentType:{connect:{id}}
    }
  })

  res.json(result)
}
