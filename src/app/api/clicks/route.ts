import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const COLLECTION = "linkClicks";

type ClickDoc = {
  _id: string;
  count: number;
};

export async function GET() {
  const client = await clientPromise;
  const docs = await client
    .db()
    .collection<ClickDoc>(COLLECTION)
    .find()
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json(counts);
}

export async function POST(request: NextRequest) {
  const { linkId } = await request.json();

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json({ error: "linkId is required" }, { status: 400 });
  }

  const client = await clientPromise;
  const result = await client
    .db()
    .collection<ClickDoc>(COLLECTION)
    .findOneAndUpdate(
      { _id: linkId },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

  return NextResponse.json({ linkId, count: result?.count ?? 1 });
}
