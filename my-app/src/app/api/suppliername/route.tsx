import { json } from "stream/consumers";
import { connectToDataBase } from "../../lib/dbconnection";
import Suppliername from "../../lib/models/suppliername";
import { NextResponse } from "next/server";
import { NextApiResponse, NextApiRequest } from "next";
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // const {} = req.body
  const body = await req.json();
  // console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", body);
  await connectToDataBase();
  const result = await Suppliername.create(body);
  console.log("here");
  return new Response(result);
}
