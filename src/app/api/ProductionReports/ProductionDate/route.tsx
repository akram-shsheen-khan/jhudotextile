import { json } from "stream/consumers";
import { connectToDataBase } from "../../../lib/dbconnection";
import costingSheet from "../../../lib/models/costingSheet";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  const body = await req.json();
  console.log("🚀 ~ file: route.tsx:9 ~ POST ~ body:", body);

  await connectToDataBase();

  const result = await costingSheet
    .find({
      dyeingdate: { $gte: body?.startDate, $lte: body?.endDate },
      
    })
    .sort({ dated: 1 });
  console.log("🚀 ~ file: route.tsx:20 ~ POST ~ result:", result);

  return NextResponse.json(result);
}


