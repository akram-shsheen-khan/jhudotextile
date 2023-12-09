// exports.generateToken = (email, userId, secret, scope) =>
//   jwt.sign({ email, userId, scope }, secret);

import { json } from "stream/consumers";
import { connectToDataBase } from "../../lib/dbconnection";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "@/app/lib/models/User";

export async function POST(req: Request, res: NextResponse) {
  // const {} = req.sbody
  const body = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", body);
  await connectToDataBase();
  let user:any = await User.find({ username: body.username })
  user= user[0]
  function compareAsync(param1:string, param2:string) {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(param1, param2, function(err:any, res:any) {
            console.log("🚀 ~ file: route.tsx:20 ~ bcrypt.compare ~ param1, param2:", param1, param2)
            if (err) {
                 reject(err);
            } else {
                 resolve(res);
            }
        });
    });
}
const hashedPassword = await  compareAsync(String(body.password), user?.password)
  console.log("🚀 ~ file: route.tsx:31 ~ POST ~ hashedPassword:", hashedPassword)
  if (!hashedPassword) {
    return NextResponse.json(
      { iserror: true, message: "incorrect Password" },
      { status: 400 }
    );
    }else {
        let token = jwt.sign(
          {
            data: {
              username: user?.username,
              role: user?.role,
              message: "Successfully LogedIn",
            },
          },
          process.env.DATA_DECRYPTION_KEY
        );
       return NextResponse.json({
          token,
          username: user?.username,
          role: user?.role,
          message: "user Logged In Successfully",
        },{status:200});
      }
   
      
  
}

// Register Controller Start //
// export const registerHandle = (req, res) => {
//   console.log(req.body);
//   if (req.body.password !== req.body.confirmPassword) {
//     return res
//       )
//       .json({ iserror: true, message: "Password not match." });
//   } else {
//     findUserByUsername(req.body.username, async (err, phone) => {
//       if (err) {
//         console.log("step1" + err);
//         NextResponse.json({ iserror: true, message: err });
//       } else if (phone.length > 0) {
//         //------------ User already exists ------------//
//         NextResponse.json({
//           iserror: true,
//           message: "Failed  user already exsists.",
//         });
//       } else {
//         findUserByUsername(req.body.userName, async (err, user) => {
//           console.log(user + "body" + req.body.userName);
//           if (err) {
//             console.log("step2" + err);
//             NextResponse.json({ iserror: true, message: err });
//           } else if (user.length > 0) {
//             //------------ User already exists ------------//
//             NextResponse.json({
//               iserror: true,
//               message: "UserName already exsists try another one.",
//             });
//           } else {
//             const salt = await bcrypt.genSalt(8);
//             const hashedPassword = await bcrypt.hash(req.body.password, salt);

//             db.query(
//               'INSERT INTO users (username, password, normalPassword, role) VALUES ("' +
//                 req.body.userName +
//                 '","' +
//                 hashedPassword +
//                 '","' +
//                 req.body.password +
//                 '","' +
//                 1 +
//                 '")',
//               (err, result) => {
//                 if (err) {
//                   console.log("step3" + err);
//                   NextResponse.json({ iserror: true, message: err });
//                 } else {
//                   console.log(result);
//                   NextResponse.json({
//                     iserror: false,
//                     massage: "Successfully registered please login now",
//                   });
//                 }
//               }
//             );
//           }
//         });
//       }
//     });
//   }
// };
//  Login Controller Start //
