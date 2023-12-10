import { connectToDataBase } from "../../lib/dbconnection";
import fabricIssued from "../../lib/models/fabricIssued";
import Transaction from "../../lib/models/transaction";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  const body = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", body);
  await connectToDataBase();
  const result = await fabricIssued.create(body);
  const transRes = await Transaction.create({
    ...body,
    trans_id: result._id,
    type: "issued",
  });
  return NextResponse.json(transRes);
}
export async function PUT(req: Request, res: NextResponse) {
  const { id, payload } = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", id, payload);
  await connectToDataBase();
  const result = await fabricIssued.updateOne({ _id: id }, payload);
  const transRes = await Transaction.updateOne(
    { trans_id: id },
    {
      ...payload,
    }
  );
  return NextResponse.json(result);
}
export async function PATCH(req: Request, res: NextResponse) {
  const { id } = await req.json();
  console.log(id);
  await connectToDataBase();
  const result = await fabricIssued.deleteOne({ _id: id });
  const transRes = await Transaction.deleteOne({ trans_id: id });

  return NextResponse.json(result);
}
export async function GET(req: Request, res: NextResponse) {
  await connectToDataBase();
  const result: any = await fabricIssued.find({});
  return NextResponse.json(result);
}
