import { connectToDataBase } from "../../lib/dbconnection";
import costingSheetTwo from "../../lib/models/costingSheetTwo";
import hbchemicalconsumption from "../../lib/models/hbchemicalconsumption";
import dyesNameconsumption from "../../lib/models/dyesnameconsumption";
import dchemicalconsumption from "../../lib/models/dchemicalconsumption";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  try {
    const body = await req.json();
    console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", body);
    await connectToDataBase();
    const result = await costingSheetTwo.create(body?.payload);
    const result2 = await hbchemicalconsumption.insertMany(body?.HBchemical);
    const result3 = await dyesNameconsumption.insertMany(body?.dyesName);
    const result4 = await dchemicalconsumption.insertMany(body?.dyeingChemical);

    return NextResponse.json({ message: "successfully" });
  } catch (e) {
    console.log("🚀 ~ file: route.tsx:21 ~ POST ~ e:", e);
  }
}
export async function PUT(req: Request, res: NextResponse) {
  const { id, payload } = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", id, payload);
  await connectToDataBase();
  const result = await costingSheetTwo.updateOne({ _id: id }, payload);
  return NextResponse.json(result);
}
export async function PATCH(req: Request, res: NextResponse) {
  const { id } = await req.json();
  console.log(id);
  await connectToDataBase();
  const result = await costingSheetTwo.deleteOne({ _id: id });
  return NextResponse.json(result);
}
export async function GET(req: Request, res: NextResponse) {
  await connectToDataBase();
  const result: any = await costingSheetTwo.find({});
  return NextResponse.json(result);
}
