import transaction from "@/app/lib/models/transaction";
import { connectToDataBase } from "../../lib/dbconnection";
import fabricReceived from "../../lib/models/fabricReceived";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  const body = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", body);
  await connectToDataBase();
  const result = await fabricReceived.create(body);
  const transRes = await transaction.create({
    ...body,
    trans_id: result._id,
    type: "received",
  });
  return NextResponse.json(transRes);
}
export async function PUT(req: Request, res: NextResponse) {
  const { id, payload } = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", id, payload);
  await connectToDataBase();
  const result = await fabricReceived.updateOne({ _id: id }, payload);
  console.log("🚀 ~ file: route.tsx:24 ~ PUT ~ result:", result);
  const transRes = await transaction.updateOne(
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
  const result = await fabricReceived.deleteOne({ _id: id });
  const transRes = await transaction.deleteOne({ trans_id: id });
  return NextResponse.json(result);
}
export async function GET(req: Request, res: NextResponse) {
  await connectToDataBase();
  const result: any = await fabricReceived.find({});
  return NextResponse.json(result);
}
