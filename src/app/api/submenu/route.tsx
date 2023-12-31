import { json } from "stream/consumers";
import { connectToDataBase } from "../../lib/dbconnection";
import Menu from "../../lib/models/menu";
import SubMenu from "../../lib/models/subMenu";
import role from "../../lib/models/role";
import RoleMenuAccess from "../../lib/models/roleMenuAccess";
import roleSubMenuAccess from "../../lib/models/roleSubMenuAccess";
import { NextResponse } from "next/server";
import { NextApiResponse } from "next";

export async function POST(req: Request, res: NextApiResponse) {
  const { role } = await req.json();
  console.log("🚀 ~ file: route.tsx:12 submenu~ POST ~ role:", role);
  await connectToDataBase();
  // Your aggregation pipeline
  const pipelineMenu = [
    {
      $lookup: {
        from: "rolemenuaccesses", // The name of the collection to join with
        localField: "menu_id", // The field from the input documents (Menu collection)
        foreignField: "menu_id", // The field from the documents of the "from" collection (RoleMenuAccess collection)
        as: "menu_access", // The name for the output array field
      },
    },
    {
      $unwind: {
        path: "$menu_access",
        preserveNullAndEmptyArrays: true, // Preserve unmatched documents from the left collection (Menu)
      },
    },
    {
      $match: {
        "menu_access.role_id": Number(role),
        "menu_access.user_permission": 1,
      },
    },
    {
      $addFields: {
        menu_access_id: "$menu_access.menu_access_id",
        role_id: "$menu_access.role_id",
        user_permission: "$menu_access.user_permission",
      },
    },
    {
      $project: {
        menu_access: 0, // Exclude the original menu_access field if desired
      },
    },
  ];
  const pipelineSubMenu = [
    {
      $lookup: {
        from: "rolesubmenuaccesses", // The name of the collection to join with
        localField: "submenu_id", // The field from the input documents (Menu collection)
        foreignField: "submenu_id", // The field from the documents of the "from" collection (RoleMenuAccess collection)
        as: "sub_menu_access", // The name for the output array field
      },
    },
    {
      $unwind: {
        path: "$sub_menu_access",
        preserveNullAndEmptyArrays: true, // Preserve unmatched documents from the left collection (Menu)
      },
    },
    {
      $match: {
        "sub_menu_access.role_id": Number(role),
        "sub_menu_access.user_permission": 1,
      },
    },
    {
      $addFields: {
        submenu_access_id: "$sub_menu_access.submenu_access_id",
        role_submenu_accesscol: "$sub_menu_access.role_submenu_accesscol",
        menu_id: "$sub_menu_access.menu_id",
        role_id: "$sub_menu_access.role_id",
        user_permission: "$sub_menu_access.user_permission",
      },
    },
    {
      $project: {
        sub_menu_access: 0, // Exclude the original menu_access field if desired
      },
    },
  ];
  const MenuR: any = await Menu.aggregate(pipelineMenu);
  const SubMenuR: any = await SubMenu.aggregate(pipelineSubMenu);
  return NextResponse.json({ menu: MenuR, submenu: SubMenuR }, { status: 200 });
  // const result = await menu.find({});
  // console.log("🚀 ~ file: route.tsx:12 ~ POST ~ result:", result);
}
