import { json } from "stream/consumers";
import { connectToDataBase } from "../../lib/dbconnection";
import chemicalname from "../../lib/models/chemicalname";
import { NextResponse } from "next/server";
import { NextApiResponse, NextApiRequest } from "next";
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // const {} = req.body
  const body = await req.json();
  console.log("🚀 ~ file: route.js:5 ~ GET ~ equest.body:", body);
  await connectToDataBase();
  const result = await chemicalname.create(body);
  return new Response(result);
}
