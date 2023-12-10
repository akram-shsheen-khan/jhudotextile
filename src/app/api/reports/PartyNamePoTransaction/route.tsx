import { json } from "stream/consumers";
import { connectToDataBase } from "../../../lib/dbconnection";
import Transaction from "../../../lib/models/transaction";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  const body = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", body);
  await connectToDataBase();
  const result = await Transaction.find({
    dated: { $gte: body?.startDate, $lte: body?.endDate },
    partyname: body?.partyname,
    pono: body?.pono,
  }).sort({ dated: 1 });
  return NextResponse.json(result);
}
