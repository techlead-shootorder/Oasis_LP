import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const userRequestJson = await request.json();
    const { mobile, otp_val } = userRequestJson;

    console.log("Lead request is ", userRequestJson);

    // Input validation
    if (!mobile || !otp_val) {
      return NextResponse.json(
        { error: "Mobile number and OTP value are required" },
        { status: 400 }
      );
    }

    const API_KEY = "b8fce1110e804fed22978980a94ed5fc1b956d2dc1560efa";
    const API_TOKEN = "8ff014908bc520818e0406441fddab7b70ae1428196997a2";
    const SUBDOMAIN = "api.in.exotel.com";
    const SID = "oasisindia1m";
    const API_URL = `https://${SUBDOMAIN}/v1/Accounts/${SID}/Sms/send`;

    const senderId = "OASIST";
    const message = `OTP for enquiry with Oasis Fertility is ${otp_val} and valid for 2 minutes. Do not share this OTP with anyone for security reasons.`;

    // Data payload for the API request
    const params = new URLSearchParams({
      From: senderId,
      To: mobile,
      Body: message,
    });

    // Encode API_KEY and API_TOKEN for Basic Auth
    const authHeader = `Basic ${Buffer.from(`${API_KEY}:${API_TOKEN}`).toString(
      "base64"
    )}`;

    // Use fetch to send OTP via Exotel API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: authHeader,
      },
      body: params.toString(),
    });

    const data = await response.json();
    console.log("Response from Exotel:", data);

    if (response.ok) {
      return NextResponse.json(
        { success: true, response: data },
        { status: 200 }
      );
    } else {
      console.error("Error response from Exotel:", data);
      return NextResponse.json(
        { error: "Failed to send OTP", details: data },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error sending OTP via Exotel:", error);
    return NextResponse.json(
      {
        error: "An error occurred while sending the OTP",
        details: error.message,
      },
      { status: 500 }
    );
  }
}