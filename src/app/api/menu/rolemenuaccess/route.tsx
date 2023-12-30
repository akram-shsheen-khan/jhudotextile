import { connectToDataBase } from "../../../lib/dbconnection";
import RoleMenuAccess from "../../../lib/models/roleMenuAccess";


import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
    const { roleId, menuId } = await req.json();
  
    try {
      const lastId:any =  await RoleMenuAccess.find({}).limit(1).sort({_id:-1})

      // Insert into role_menu_access
      await RoleMenuAccess.create({
        menu_id: menuId,
        role_id: roleId,
        menu_access_id:lastId?.length ? lastId[0].menu_access_id+1:1,
        user_permission:1
      });
  
      return NextResponse.json({message:"Menu access added successfully."},{status:200});
    } catch (error:any) {
      return NextResponse.json({error:error.message},{status:500});
    }
  };
export const PATCH = async (req: Request, res: NextResponse) => {
    const { roleId, menuId } = await req.json();
  
    try {
      // Insert into role_menu_access
      await RoleMenuAccess.deleteOne({
        menu_id: menuId,
        role_id: roleId,
      });
  
      return NextResponse.json({message:"Menu access deleted successfully."},{status:200});
    } catch (error:any) {
      return NextResponse.json({error:error.message},{status:500});
    }
  };