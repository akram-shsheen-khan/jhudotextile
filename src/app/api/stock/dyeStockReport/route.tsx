import { json } from "stream/consumers";
import { connectToDataBase } from "../../../lib/dbconnection";
import stock from "../../../lib/models/DyesStock";
import { NextResponse } from "next/server";
import dyesnameconsumption from "@/app/lib/models/dyesnameconsumption";
import dyesPurchasing from "@/app/lib/models/dyesPurchasing";
import dyesname from "@/app/lib/models/dyesname";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  const { year, month } = await req.json();
  await connectToDataBase();
  const DyesConsumptionStock = await dyesnameconsumption.aggregate([
    {
      $match: {
        dyeingdate: { $regex: `^${year}-${month}` }, // Match entries for the specified year and month
      },
    },
    {
      $group: {
        _id: "$dyesname",
        totalDyesDyingQTY: { $sum: "$quantity" },
      },
    },
  ]);

  const DyesPurchasingStock = await dyesPurchasing.aggregate([
    {
      $match: {
        date: { $regex: `^${year}-${month}` }, // Match entries for the specified year and month
      },
    },
    {
      $group: {
        _id: "$dyesname",
        totalDyesPurchasingQTY: { $sum: "$quantity" },
      },
    },
  ]);

  const stockResult = await stock.aggregate([
    {
      $match: {
        date: { $regex: `^${year}-${month}` }, // Match entries for the specified year and month
      },
    },
    {
      $group: {
        _id: "$dyesname",
        totalStock: { $sum: "$quantity" },
      },
    },
  ]);
  const dyess = await dyesname.find({});

  const chanicalSheetData = dyess.map((dyes: any) => {
    const stockData = stockResult.find(
      (stock: any) => stock._id === dyes.dyesname
    );

    const totalStock = stockData ? stockData.totalStock : 0;
    const purchasingData = DyesPurchasingStock.find(
      (stock: any) => stock._id === dyes.dyesname
    );

    const totalPurchasing = purchasingData
      ? purchasingData.totalDyesPurchasingQTY
      : 0;

    const DyingData = DyesConsumptionStock.find(
      (stock: any) => stock._id === dyes.dyesname
    );

    const DCtotal = DyingData ? DyingData.totalDyesDyingQTY : 0;

    const totalReceived = totalStock + totalPurchasing;
    const balance = totalReceived - DCtotal;
    return {
      dyesname: dyes.dyesname,
      _id: dyes._id,
      code: dyes.code,
      openingStock: totalStock,
      totalPurchasing,
      totalReceived,
      DCtotal,
      balance,
    };
  });

  return NextResponse.json(chanicalSheetData);
}
export async function PUT(req: Request, res: NextResponse) {
  const { id, payload } = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", id, payload);
  await connectToDataBase();
  const result = await stock.updateOne({ _id: id }, payload);
  return NextResponse.json(result);
}
export async function PATCH(req: Request, res: NextResponse) {
  const { id } = await req.json();
  console.log(id);
  await connectToDataBase();
  const result = await stock.deleteOne({ _id: id });
  return NextResponse.json(result);
}
export async function GET(req: Request, res: NextResponse) {
  await connectToDataBase();
  const result: any = await stock.find({});
  return NextResponse.json(result);
}
