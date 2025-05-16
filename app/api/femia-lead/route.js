import { NextResponse } from "next/server";
import { AppConstant } from "@/lib/constant/AppConstant";
// import { formatDateToYYYYMMDD } from "@/util/DataUtil"
import dbConnection from "@/util/db";

const LIVE_LEAD_URL_PREFIX = "https://login.salesforce.com";
const LIVE_SF_CLIENT_ID = "3MVG95mg0lk4bath3P0wsRv34QU3hcG4X7nJXJA3QJhhQyN7zM0oAA9SJSzj615ZRwEta4KWXFyCMjkIx_ZQy";
const LIVE_SF_CLIENT_SECRET = "347AC2A3BCA22AFA96F29043FC175553277A56925A67DD83681745EBC18BF1E3";
const LIVE_SF_USERNAME = "integration.user@oasis.in.prod";
const LIVE_SF_PASSWORD = "oasis@12345";

// const LEADSQUARED_URL = "https://api.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?&accessKey=u$r28bf3b3ba19df2ce87f563a0c9e7d95d&secretKey=eb6eaef1c9fc31bceaf852a72b99a3b827883261";

const QA_LEAD_URL_PREFIX = "https://test.salesforce.com";
const QA_SF_CLIENT_ID = "3MVG9KAEr0ABaqiqvyP38gRpW3_7xFyHEqjH1Cpc6k1v7M6VKbs5uli3p1HYAx80ZgGLTa7BWgfxsQayH7BOK";
const QA_SF_CLIENT_SECRET = "8D8C4691D4017EFEAA311955A97F07FBAB392E068A6F9C3AD286B9708A8945D7";
const QA_SF_USERNAME = "adminuat@support.com";
const QA_SF_PASSWORD = "Oasisuat@12343SpRKsDucWzG4EujG6MOxMTDz";

let LEAD_URL_PREFIX = AppConstant.environment == "qa" ? QA_LEAD_URL_PREFIX : LIVE_LEAD_URL_PREFIX;
let SF_CLIENT_ID = AppConstant.environment == "qa" ? QA_SF_CLIENT_ID : LIVE_SF_CLIENT_ID;
let SF_CLIENT_SECRET = AppConstant.environment == "qa" ? QA_SF_CLIENT_SECRET : LIVE_SF_CLIENT_SECRET;
let SF_USERNAME = AppConstant.environment == "qa" ? QA_SF_USERNAME : LIVE_SF_USERNAME;
let SF_PASSWORD = AppConstant.environment == "qa" ? QA_SF_PASSWORD : LIVE_SF_PASSWORD;

export async function POST(request) {
  let response = null;
  let leadResponse = null;
  const userRequestJson = await request.json();
  console.log("Lead request is ", userRequestJson);

  try {
    leadResponse = await sendSalesforceLeadRequest(userRequestJson);
  } catch (error) {
    console.log("error in storing slaes force lead request", error);
  }

  return NextResponse.json(
    {
      message: "Thank you for reaching out to us. Our execuitve will get back to you shortly.",
      response: response,
      leadResponse: leadResponse,
    },
    { status: 200 }
  );
}

async function sendSalesforceLeadRequest(requestJson) {
  try {
    let myHeaders = new Headers();
    let formdata = new FormData();
    formdata.append("grant_type", "password");
    formdata.append("client_id", SF_CLIENT_ID);
    formdata.append("client_secret", SF_CLIENT_SECRET);
    formdata.append("username", SF_USERNAME);
    formdata.append("password", SF_PASSWORD);

    let authResponse = await fetch(LEAD_URL_PREFIX + "/services/oauth2/token", {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    });

    if (!authResponse.ok) {
      throw new Error("Network response was not ok");
    }

    const authData = await authResponse.json();
    if (authData && authData.access_token) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "OAuth " + authData.access_token);
      myHeaders.append("Content-Type", "application/json");
      // let firstName = "";
      // let lastName = "";
      
      // if (
      //   !requestJson.lastName &&
      //   requestJson.firstName &&
      //   requestJson.firstName.length > 0 &&
      //   requestJson.firstName.split(" ").length > 1
      // ) {
      //   const nameParts = requestJson.firstName.trim().split(" ");
      //   firstName = nameParts[0] || "";
      //   lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : firstName;
      // } else {
      //   lastName = requestJson.lastName ?? requestJson.firstName.trim();
      //   firstName = requestJson.firstName.trim();
      // }

      // let ModifiedLeadSource;

      if (requestJson.utmSource) {
        const utmSource = requestJson.utmSource.toLowerCase();

        if (utmSource.includes("google") || utmSource.includes("GCLID")) {
          // ModifiedLeadSource = "Google Ads";
        } else if (utmSource.includes("meta")) {
          // ModifiedLeadSource = "Meta Ads";
        } else {
          // ModifiedLeadSource = requestJson.utmSource;
        }
      } else {
        // ModifiedLeadSource = "Organic";
      }

      console.log("")
  
    //   first write all the keys as they created from the backend
    // then get the value on that field from requestJson.ourfieldName
      const raw = JSON.stringify({
        LastName: requestJson.name,
        Company: 'Oasis Fertility',
        Phone: requestJson.contact.phoneNumber ?? "",
        // LastName: 'Faraz',
        // Company: 'Oasis Fertility',
        // Phone: '7218426717',
        UTM_Campaign__c: requestJson.utmCampaign ?? "Website",
        UTM_Source__c: requestJson.utmSource ?? "Website",
        UTM_Medium__c: requestJson.utmMedium ?? "Website",
        UTM_Content__c: requestJson.utmContent ?? "English|",
        // Keyword__c: requestJson.utmTerm ?? "Website",
        // Appointment_Date__c: requestJson.appointmentDate ?? formatDateToYYYYMMDD(new Date()),
        // Page_URL1__c: requestJson.pageUrl ?? "",
        // Referral_URL1__c: requestJson.referralUrl ?? "",
        // Ad_Group_ID__c: requestJson.adgroupid ?? "",
        // Google_Campaign_ID__c: requestJson.campaignid ?? "",
        // Select_Your_Branch__c: "",
        // FBCL_ID__c: requestJson.fbclid ?? "",
        // GCLID__c: requestJson.gclid ?? "",
        // Fertility_Issue__c: requestJson.fertilityIssue ?? "",
        // Referral_Name__c: requestJson.refferalName ?? "",
        // API_Call__c: true,
      });

      console.log("Salesforce Lead request>> ", raw);

      let response = await fetch(
        authData.instance_url + `/services/data/v60.0/sobjects/Lead/Phone__c/${encodeURIComponent(requestJson.contact.phoneNumber)}`,
        {
          method: "PATCH",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        }
      );

      let leadSubmitData = await response.json();

      console.log("Salesforce Lead form submission response is ", leadSubmitData);
      
      if (leadSubmitData && leadSubmitData.success && leadSubmitData.id) {
        try {
          await storeLeadData(requestJson);
        } catch (error) {
          console.log(error);
        }
        return leadSubmitData.id;
      } else {
        if (leadSubmitData && leadSubmitData.length > 0) {
          const { message, errorCode } = leadSubmitData[0];
          requestJson.errorMessage = `${message} ------ ${errorCode}`;
        }
        try {
          // await storeLeadData(requestJson);
        } catch (error) {
          console.log(error);
        }
        return leadSubmitData;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

async function storeLeadData(requestJson) {
  const sql = `INSERT INTO oasisfertility_lead_store_lp (
    firstName, lastName, age, gender, mobile_number, email, company, 
    leadSource, utm_campaign, utm_source, utm_medium, 
    utm_content, keyword, appointment_date, page_url, 
    referral_url, ad_group_id, google_campaign_id, 
    select_your_branch, fbclid, gclid, errorMessage
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  let firstName = "";
  let lastName = "";

  if (
    !requestJson.lastName &&
    requestJson.firstName &&
    requestJson.firstName.length > 0 &&
    requestJson.firstName.split(" ").length > 1
  ) {
    // const nameParts = requestJson.firstName.trim().split(" ");
    // firstName = nameParts[0] || "";
    // lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : firstName;
  } else {
    // lastName = requestJson.lastName ?? requestJson.firstName.trim();
    // firstName = requestJson.firstName.trim();
  }

  let ModifiedLeadSourceSQL;

  if (requestJson.utmSource) {
    const utmSource = requestJson.utmSource.toLowerCase();

    if (utmSource.includes("google") || utmSource.includes("GCLID")) {
      ModifiedLeadSourceSQL = "Google Ads";
    } else if (utmSource.includes("meta")) {
      ModifiedLeadSourceSQL = "Meta Ads";
    } else {
      ModifiedLeadSourceSQL = requestJson.utmSource;
    }
  } else {
    ModifiedLeadSourceSQL = "Organic";
  }

  const leadData = {
    firstName: requestJson.name,
    lastName,
    age: requestJson.age ?? null,
    gender: requestJson.gender ?? "",
    mobile_number: requestJson.contact.phoneNumber ?? "",
    email: requestJson.emailId ?? "",
    company: requestJson.message?.length > 0 ? requestJson.message : "Oasis",
    leadSource: ModifiedLeadSourceSQL,
    utm_campaign: requestJson.utmCampaign ?? "Website",
    utm_source: requestJson.utmSource ?? "Website",
    utm_medium: requestJson.utmMedium ?? "Website",
    utm_content: requestJson.utmContent ?? "English|",
    keyword: requestJson.utmTerm ?? "Website",
    appointment_date: requestJson.appointmentDate ?? null,
    page_url: requestJson.pageUrl ?? "",
    referral_url: requestJson.referralUrl ?? "",
    ad_group_id: requestJson.adgroupid ?? "",
    google_campaign_id: requestJson.campaignid ?? "",
    select_your_branch: "",
    fbclid: requestJson.fbclid ?? "",
    gclid: requestJson.gclid ?? "",
    errorMessage: requestJson.errorMessage ?? "success",
    api_call: true,
  };

  try {
    const [rows] = await dbConnection.execute("SELECT 1");
    if (rows) {
      console.log("Database is connected");
    }

    const [result] = await dbConnection.execute(sql, [
      leadData.firstName,
      leadData.lastName,
      leadData.age,
      leadData.gender,
      leadData.mobile_number,
      leadData.email,
      leadData.company,
      leadData.leadSource,
      leadData.utm_campaign,
      leadData.utm_source,
      leadData.utm_medium,
      leadData.utm_content,
      leadData.keyword,
      leadData.appointment_date,
      leadData.page_url,
      leadData.referral_url,
      leadData.ad_group_id,
      leadData.google_campaign_id,
      leadData.select_your_branch,
      leadData.fbclid,
      leadData.gclid,
      leadData.errorMessage
    ]);

    return result;
  } catch (err) {
    console.error("Error inserting lead data:", err);
    throw new Error("Database insertion error");
  }
}

// async function sendLeadSquaredRequest(requestJson) {
//   try {
//     let name = requestJson.firstName + (requestJson.lastName ? " " + requestJson.lastName : "");
//     const raw = JSON.stringify([
//       { Attribute: "FirstName", Value: name },
//       { Attribute: "mx_Gender", Value: requestJson.gender ?? "" },
//       { Attribute: "mx_Age", Value: requestJson.age ?? "" },
//       { Attribute: "mx_SelectYourBranch", Value: "" },
//       { Attribute: "Mobile", Value: requestJson.mobileNo },
//       { Attribute: "Source", Value: requestJson.utmSource ?? "" },
//       { Attribute: "mx_UTM_Campaign", Value: requestJson.utmCampaign ?? "" },
//       { Attribute: "mx_UTM_Source", Value: requestJson.utmSource ?? "" },
//       { Attribute: "mx_UTM_medium", Value: requestJson.utmMedium ?? "" },
//       { Attribute: "mx_UTM_Content", Value: requestJson.utmContent ?? "English|" },
//       { Attribute: "mx_UTM_Term", Value: requestJson.utmTerm ?? "" },
//       { Attribute: "mx_Source_Campaign_ID", Value: requestJson.utmCampaignId ?? "" },
//       { Attribute: "mx_Source_Adgroup_Id", Value: requestJson.adGroupId ?? "" },
//       { Attribute: "Origin", Value: requestJson.referralUrl ?? "" },
//       { Attribute: "mx_Appointment_Date", Value: requestJson.appointmentDate ?? formatDateToYYYYMMDD(new Date()) },
//       { Attribute: "SearchBy", Value: "Mobile" },
//     ]);

//     console.log("Leadsquared request is " + raw);

//     let response = await fetch(LEADSQUARED_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: raw,
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     let leadSubmitData = await response.json();

//     console.log("Lead form submission response from leadsquared is ", leadSubmitData);
//   } catch (error) {
//     console.log(error);
//   }
// }