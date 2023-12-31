import { connectToDataBase } from "../../lib/dbconnection";
import { NextResponse } from "next/server";
import UserModel from "../../lib/models/User";
import bcrypt from "bcrypt";

export const GET = async (req: Request, res: NextResponse) => {
  await connectToDataBase();

  try {
    const result = await UserModel.aggregate([
      {
        $lookup: {
          from: "roles",
          localField: "role",
          foreignField: "_id",
          as: "roleInfo",
        },
      },
      {
        $project: {
          _id: 1,
          username: 1,
          normalPassword: 1,
          role: 1,
          roleName: "$roleInfo.name",
        },
      },
    ]);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch users." },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  await connectToDataBase();

  try {
    const body = await req.json();

    if (!body || !body.username || !body.normalPassword || !body.role) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(body.normalPassword, salt);
    const lastId: any = await UserModel.find({}).limit(1).sort({ _id: -1 });

    const user = new UserModel({
      username: body.username,
      password: hashedPassword,
      normalPassword: body.normalPassword,
      role: body.role,
      id: lastId?.length ? lastId[0].id + 1 : 1,
    });

    const result = await user.save();
    return NextResponse.json("Data added successfully.");
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add user." }, { status: 500 });
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  await connectToDataBase();

  try {
    const body = await req.json();

    if (
      !body ||
      !body.id ||
      !body.username ||
      !body.normalPassword ||
      !body.role
    ) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(body.normalPassword, salt);

    const result = await UserModel.updateOne(
      { _id: body.id },
      {
        $set: {
          username: body.username,
          password: hashedPassword,
          normalPassword: body.normalPassword,
          role: body.role,
        },
      }
    );

    return NextResponse.json("Data updated successfully.");
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update user." },
      { status: 500 }
    );
  }
};

export const PATCH = async (req: Request, res: NextResponse) => {
  await connectToDataBase();

  try {
    const body = await req.json();
    console.log("🚀 ~ file: route.tsx:102 ~ PATCH ~ body:", body);

    if (!body || !body.id) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const result = await UserModel.deleteOne({ _id: body.id });
    return NextResponse.json("Data deleted successfully.");
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete user." },
      { status: 500 }
    );
  }
};
