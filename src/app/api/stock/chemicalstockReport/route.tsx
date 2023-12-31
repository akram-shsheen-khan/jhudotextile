import { json } from "stream/consumers";
import { connectToDataBase } from "../../../lib/dbconnection";
import stock from "../../../lib/models/ChemicalStock";
import { NextResponse } from "next/server";
import dchemicalconsumption from "@/app/lib/models/dchemicalconsumption";
import hbchemicalconsumption from "@/app/lib/models/hbchemicalconsumption";
import chemicalPurchasing from "@/app/lib/models/chemicalPurchasing";
import chemicalname from "@/app/lib/models/chemicalname";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  const { year, month } = await req.json();
  await connectToDataBase();
  const dcCemicalConsumptionStock = await dchemicalconsumption.aggregate([
    {
      $match: {
        dyeingdate: { $regex: `^${year}-${month}` }, // Match entries for the specified year and month
      },
    },
    {
      $group: {
        _id: "$chemicalname",
        totalChemicalDyingQTY: { $sum: "$quantity" },
      },
    },
  ]);
  const hbCemicalConsumptionStock = await hbchemicalconsumption.aggregate([
    {
      $match: {
        dyeingdate: { $regex: `^${year}-${month}` }, // Match entries for the specified year and month
      },
    },
    {
      $group: {
        _id: "$chemicalname",
        totalChemicalHBQTY: { $sum: "$quantity" },
      },
    },
  ]);
  const ChemicalPurchasingStock = await chemicalPurchasing.aggregate([
    {
      $match: {
        date: { $regex: `^${year}-${month}` }, // Match entries for the specified year and month
      },
    },
    {
      $group: {
        _id: "$chemicalname",
        totalChemicalPurchasingQTY: { $sum: "$quantity" },
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
        _id: "$chemicalname",
        totalStock: { $sum: "$quantity" },
      },
    },
  ]);
  const chemicals = await chemicalname.find({});

  const chanicalSheetData = chemicals.map((chemical: any) => {
    const stockData = stockResult.find(
      (stock: any) => stock._id === chemical.chemicalname
    );

    const totalStock = stockData ? stockData.totalStock : 0;
    const purchasingData = ChemicalPurchasingStock.find(
      (stock: any) => stock._id === chemical.chemicalname
    );

    const totalPurchasing = purchasingData
      ? purchasingData.totalChemicalPurchasingQTY
      : 0;
    const HBData = hbCemicalConsumptionStock.find(
      (stock: any) => stock._id === chemical.chemicalname
    );

    const totalHB = HBData ? HBData.totalChemicalHBQTY : 0;
    const DyingData = dcCemicalConsumptionStock.find(
      (stock: any) => stock._id === chemical.chemicalname
    );

    const DCtotal = DyingData ? DyingData.totalChemicalDyingQTY : 0;

    const totalReceived = totalStock + totalPurchasing;
    const totalChemicalConsumption = DCtotal + totalHB;
    const balance = totalReceived - totalChemicalConsumption;
    return {
      chemicalname: chemical.chemicalname,
      _id: chemical._id,
      code: chemical.code,
      openingStock: totalStock,
      totalPurchasing,
      totalReceived,
      totalHB,
      DCtotal,
      totalChemicalConsumption,
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
