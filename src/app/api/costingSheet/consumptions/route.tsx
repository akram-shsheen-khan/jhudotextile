import { connectToDataBase } from "../../../lib/dbconnection";

import hbchemicalconsumption from "../../../lib/models/hbchemicalconsumption";
import dyesNameconsumption from "../../../lib/models/dyesnameconsumption";
import dchemicalconsumption from "../../../lib/models/dchemicalconsumption";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  try {
    const { lotno } = await req.json();
    await connectToDataBase();
    const hbchemicalconsumptions = await hbchemicalconsumption.find({ lotno });
    const dyesNameconsumptions = await dyesNameconsumption.find({ lotno });
    const dchemicalconsumptions = await dchemicalconsumption.find({ lotno });

    return NextResponse.json({
      hbchemicalconsumptions,
      dyesNameconsumptions,
      dchemicalconsumptions,
    });
  } catch (e) {}
}
