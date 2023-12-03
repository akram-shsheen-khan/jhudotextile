import { connectToDataBase } from "../../lib/dbconnection";
import costingSheet from "../../lib/models/costingSheet";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  const body = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", body);
  await connectToDataBase();
  const result = await costingSheet.create(body);
  return NextResponse.json(result);
}
export async function PUT(req: Request, res: NextResponse) {
  const { id, payload } = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", id, payload);
  await connectToDataBase();
  const result = await costingSheet.updateOne({ _id: id }, payload);
  return NextResponse.json(result);
}
export async function PATCH(req: Request, res: NextResponse) {
  const { id } = await req.json();
  console.log(id);
  await connectToDataBase();
  const result = await costingSheet.deleteOne({ _id: id });
  return NextResponse.json(result);
}
export async function GET(req: Request, res: NextResponse) {
  await connectToDataBase();
  const result: any = await costingSheet.find({});
  return NextResponse.json(result);
}
