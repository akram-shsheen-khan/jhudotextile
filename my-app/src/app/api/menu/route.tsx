import { json } from "stream/consumers";
import { connectToDataBase } from "../../lib/dbconnection";
import menu from "../../lib/models/menu";
import subMenu from "../../lib/models/subMenu";
import role from "../../lib/models/role";
import roleMenuAccess from "../../lib/models/roleMenuAccess";
import roleSubMenuAccess from "../../lib/models/roleSubMenuAccess";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.body
  const body = await req.json();
  await connectToDataBase();
  menu
    .aggregate([
      {
        $lookup: {
          from: "roleMenuAccess",
          localField: "menu_id",
          foreignField: "menu_id",
          as: "joined_data",
        },
      },
      {
        $unwind: "$joined_data",
      },
      // {
      //   $match: {
      //     "joined_data.role_id": 1,
      //     "joined_data.user_permission": 1,
      //   },
      // },
      // {
      //   $project: {
      //     joined_data: 0, // Exclude the joined_data array from the final result
      //   },
      // },
    ])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // const result = await menu.find({});
  // console.log("🚀 ~ file: route.tsx:12 ~ POST ~ result:", result);
  return NextResponse.json([]);
}
