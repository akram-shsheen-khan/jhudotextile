import { connectToDataBase } from "../../lib/dbconnection";
import costingSheet from "../../lib/models/costingSheet";
import hbchemicalconsumption from "../../lib/models/hbchemicalconsumption";
import dyesNameconsumption from "../../lib/models/dyesnameconsumption";
import dchemicalconsumption from "../../lib/models/dchemicalconsumption";
import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest } from "next";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  try {
    const body = await req.json();
    await connectToDataBase();
    const foundLot = await costingSheet.findOne({
      lotno: body?.payload?.lotno,
    });
    console.log("🚀 ~ POST ~ body?.payload?.lotno:", body?.payload?.lotno);
    console.log("🚀 ~ POST ~ foundLot:", foundLot);
    if (foundLot) {
      return NextResponse.json({ message: "Duplicate Lotno" }, { status: 400 });
    }
    const result = await costingSheet.create(body?.payload);
    const result2 = await hbchemicalconsumption.insertMany(body?.HBchemical);
    const result3 = await dyesNameconsumption.insertMany(body?.dyesName);
    const result4 = await dchemicalconsumption.insertMany(body?.dyeingChemical);

    return NextResponse.json({ message: "successfully" });
  } catch (e) {
    console.log("🚀 ~ file: route.tsx:21 ~ POST ~ e:", e);
  }
}
export async function PUT(req: Request, res: NextResponse) {
  const { id, payload, HBchemical, dyesName, dyeingChemical } =
    await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", id, payload);
  await connectToDataBase();
  const result = await costingSheet.updateOne({ _id: id }, payload);
  await hbchemicalconsumption.deleteMany({ lotno: payload.lotno });
  await dyesNameconsumption.deleteMany({ lotno: payload.lotno });
  await dchemicalconsumption.deleteMany({ lotno: payload.lotno });
  await hbchemicalconsumption.insertMany(HBchemical);
  await dyesNameconsumption.insertMany(dyesName);
  await dchemicalconsumption.insertMany(dyeingChemical);
  return NextResponse.json(result);
}
export async function PATCH(req: Request, res: NextResponse) {
  const { id } = await req.json();
  console.log(id);
  await connectToDataBase();
  const result = await costingSheet.deleteOne({ _id: id });
  return NextResponse.json(result);
}
export async function GET(req: NextRequest, res: NextResponse) {
  await connectToDataBase();
  const params = req.nextUrl.searchParams.get("search");
  const search = params ? { lotno: params } : {};
  const result: any = await costingSheet.find({ ...search });
  return NextResponse.json(result);
}
