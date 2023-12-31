import { connectToDataBase } from "../../lib/dbconnection";
import { NextResponse } from "next/server";
import RolesModel from "../../lib/models/role";

export async function GET(req: Request, res: NextResponse) {
  await connectToDataBase();

  try {
    const result = await RolesModel.find({});
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch roles." });
  }
}

export async function POST(req: Request, res: NextResponse) {
  try {
    const body = await req.json();
    console.log("🚀 ~ file: route.tsx:19 ~ POST ~ body:", body);
    const { name } = body;
    await connectToDataBase();
    const lastId: any = await RolesModel.find({}).limit(1).sort({ _id: -1 });
    const result = await RolesModel.create({
      name,
      id: lastId?.length ? lastId[0].id + 1 : 1,
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add role." });
  }
}

export async function PUT(req: Request, res: NextResponse) {
  const body = await req.json();
  console.log("🚀 ~ file: route.tsx:34 ~ PUT ~ body:", body);
  const { id, name } = body;

  await connectToDataBase();

  try {
    const result = await RolesModel.updateOne({ _id: id }, { $set: { name } });
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update role." });
  }
}

export async function PATCH(req: Request, res: NextResponse) {
  const body = await req.json();
  const { id } = body;

  await connectToDataBase();

  try {
    const result = await RolesModel.deleteOne({ _id: id });
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete role." });
  }
}
