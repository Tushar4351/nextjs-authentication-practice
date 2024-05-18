import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
dbConnect();
export async function POST(request: NextRequest) { 
    const userId = await getDataFromToken(request);
    const user = await User.findById({_id:userId}).select("-password");
    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({message:"User found", data:user}, { status: 200 });
}

