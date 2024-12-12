export class LeadController {

    submitLeadForm(leadRequest) {
        return fetch("/api/lead", {
            method: "POST",
            body: JSON.stringify(leadRequest),
        });
    }

    submitOtpForm(leadRequest) {
        return fetch("/api/otp", {
            method: "POST",
            body: JSON.stringify(leadRequest),
        });
    }

}