import { connectToDataBase } from "../../../lib/dbconnection";
import RoleSubMenuAccess from "../../../lib/models/roleSubMenuAccess";


import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
    const { roleId, menuId,subMenuId
 } = await req.json();
  
    try {
      const lastId:any =  await RoleSubMenuAccess.find({}).limit(1).sort({_id:-1})
    

      // Insert into role_menu_access
      await RoleSubMenuAccess.create({
        menu_id: menuId,
        role_id: roleId,
        submenu_id:subMenuId
,
        submenu_access_id:lastId?.length ? lastId[0].submenu_access_id+1:1,
        user_permission:1,
        role_submenu_accesscol:1
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
      await RoleSubMenuAccess.deleteOne({
        menu_id: menuId,
        role_id: roleId,
      });
  
      return NextResponse.json({message:"Menu access deleted successfully."},{status:200});
    } catch (error:any) {
      return NextResponse.json({error:error.message},{status:500});
    }
  };