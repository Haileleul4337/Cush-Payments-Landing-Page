import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://open.er-api.com/v6/latest/GBP",
    {
      next: { revalidate: 3600 },
    }
  );

  const data = await res.json();

  return NextResponse.json({
    base: "GBP",
    rates: {
      GHS: data.rates.GHS,
      NGN: data.rates.NGN,
      KES: data.rates.KES,
    },
    updatedAt: new Date().toISOString(),
  });
}