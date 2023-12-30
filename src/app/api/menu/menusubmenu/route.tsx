import { connectToDataBase } from "../../../lib/dbconnection";
import Menu from "../../../lib/models/menu";
import SubMenu from "../../../lib/models/subMenu";

import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextResponse) {

  await connectToDataBase();
  // Your aggregation pipeline
 const MenuQ = await Menu.find({})
 console.log("🚀 ~ file: route.tsx:13 ~ GET ~ MenuQ:", MenuQ.length)
 const SubMenuQ =  await SubMenu.find({})
 console.log("🚀 ~ file: route.tsx:15 ~ GET ~ SubMenuQ:", SubMenuQ.length)
 return NextResponse.json({menu:MenuQ,submenu:SubMenuQ,dd:"dcc"},{status:200})
  // const result = await menu.find({});
  // console.log("🚀 ~ file: route.tsx:12 ~ POST ~ result:", result);
  
}
