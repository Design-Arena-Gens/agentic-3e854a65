import OpenAI from "openai";
import { NextResponse } from "next/server";
import { buildPortraitPrompt } from "@/lib/prompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new NextResponse(
      "Server missing OPENAI_API_KEY. Set env var and redeploy.",
      { status: 500 }
    );
  }

  try {
    const client = new OpenAI({ apiKey });
    const prompt = buildPortraitPrompt();

    const result = await client.images.generate({
      model: "gpt-image-1",
      prompt,
      // 8K-like look; actual output size limited by API
      size: "1024x1024",
      quality: "high",
      // background default; we specify colors in prompt
      n: 1
    });

    const b64 = result.data?.[0]?.b64_json;
    const url = result.data?.[0]?.url as string | undefined;

    if (b64) {
      return NextResponse.json({ imageBase64: b64 });
    }
    if (url) {
      return NextResponse.json({ imageUrl: url });
    }

    return new NextResponse("No image data from model", { status: 502 });
  } catch (err: any) {
    console.error(err);
    return new NextResponse(
      err?.message || "Image generation failed",
      { status: 500 }
    );
  }
}
