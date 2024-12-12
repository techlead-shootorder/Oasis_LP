import { NextResponse } from "next/server";

export async function POST(request) {
    const userRequestJson = await request.json();
    const { mobile, otp_val } = userRequestJson;

    console.log("Lead request is ", userRequestJson);

    // Input validation
    if (!mobile || !otp_val) {
        return NextResponse.json({ error: 'Mobile number and OTP value are required' }, { status: 400 });
    }

    const apikeyd = "NmY3OTc1NzQ0NTMxNzk3NDQzNmQ2YTM1Njk0Njc3NjY=";
    const senderid = "OASIST";
    const phonenum =  mobile;

    // Message to be sent via SMS
    const message = `OTP for enquiry with Oasis Fertility is '${otp_val}' and valid for 2 minutes. Do not share this OTP with anyone for security reasons.`;

    // Data payload for the API request
    const params = new URLSearchParams({
        apikey: apikeyd,
        numbers: phonenum,
        sender: senderid,
        message: encodeURIComponent(message),
    });

    try {
        // Use fetch to send OTP via TextLocal API
        const response = await fetch('https://api.textlocal.in/send/?' + params.toString(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Use URL-encoded since TextLocal expects form data
            },
        });

        const data = await response.json();
        console.log("data", data);

        if (response.ok) {
            return NextResponse.json({ success: true, response: data }, { status: 200 });
        } else {
            console.error('Error response from TextLocal:', data);
            return NextResponse.json({ error: 'Failed to send OTP', details: data }, { status: 500 });
        }
    } catch (error) {
        console.error('Error sending OTP:', error);
        return NextResponse.json({ error: 'An error occurred while sending the OTP', details: error.message }, { status: 500 });
    }
}