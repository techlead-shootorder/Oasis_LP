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

    submitFemiaForm(leadRequest) {
        return fetch ("/api/femia-lead", {
            method: "POST",
            body: JSON.stringify(leadRequest),
        });
    }

}