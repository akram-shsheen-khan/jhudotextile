import { json } from "stream/consumers";
import { connectToDataBase } from "../../../lib/dbconnection";
import Menu from "../../../lib/models/menu";
import SubMenu from "../../../lib/models/subMenu";

import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const menu = await Menu.aggregate([
      {
        $lookup: {
          from: 'rolemenuaccesses',
          localField: 'menu_id',
          foreignField: 'menu_id',
          as: 'role_menu_access'
        }
      },
      {
        $unwind: {
          path: '$role_menu_access',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $match: {
          'role_menu_access.user_permission': 1
        }
      },
      {
        $addFields: {
          menu_access_id: '$role_menu_access.menu_access_id',
          role_id: '$role_menu_access.role_id',
          // Add additional fields as needed
          // For example:
          // newField1: 'someValue',
          // newField2: '$role_menu_access.someOtherField',
        }
      },
      {
        $project: {
          role_menu_access: 0
        }
      }
    ]);

    const submenu = await SubMenu.aggregate([
      {
        $lookup: {
          from: 'rolesubmenuaccesses',
          localField: 'submenu_id',
          foreignField: 'submenu_id',
          as: 'role_submenu_access'
        }
      },
      {
        $unwind: {
          path: '$role_submenu_access',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $match: {
          'role_submenu_access.user_permission': 1
        }
      },
      {
        $addFields: {
          submenu_access_id: '$role_submenu_access.submenu_access_id',
          role_submenu_accesscol: '$role_submenu_access.role_submenu_accesscol',
          role_id: '$role_submenu_access.role_id',
          user_permission: '$role_submenu_access.user_permission',
          // Add additional fields as needed
          // For example:
          // newField1: 'someValue',
          // newField2: '$role_submenu_access.someOtherField',
        }
      },
      {
        $project: {
          role_submenu_access: 0
        }
      }
    ]);

    return NextResponse.json({ menu, submenu },{status:200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' },{status:500});
  }
};