import { json } from "stream/consumers";
import { connectToDataBase } from "../../lib/dbconnection";
import Suppliername from "../../lib/models/suppliername";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  const body = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", body);
  await connectToDataBase();
  const result = await Suppliername.create(body);
  return NextResponse.json(result);
}

export async function GET(req: Request, res: NextResponse) {
  await connectToDataBase();
  const result: any = await Suppliername.find({});
  return NextResponse.json(result);
}
