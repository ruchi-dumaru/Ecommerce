const axios = require("axios");

async function verifyKhaltiPayment(pidx) {
  try {
    let headersList = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
    };

    let bodyContent = JSON.stringify({
      pidx,
    });

    let reqOptions = {
      url: `${process.env.KHALTI_GATEWAY_URL}/api/v2/epayment/lookup/`,
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

async function initializeKhaltiPayment({
  return_url,
  website_url,
  amount,
  purchase_order_id,
  purchase_order_name,
}) {
  try {
    const headersList = {
      Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
      "Content-Type": "application/json",
    };

    const bodyContent = {
      return_url,
      website_url,
      amount,
      purchase_order_id,
      purchase_order_name,
    };

    const url = `${process.env.KHALTI_GATEWAY_URL}/api/v2/epayment/initiate/`;

    console.log("KHALTI URL:", url);
    console.log("KHALTI BODY:", bodyContent);

    const response = await axios.post(url, bodyContent, {
      headers: headersList,
    });

    return response.data;
  } catch (error) {
    console.log(
      "INITIALIZE KHALTI ERROR:",
      error.response?.data || error.message,
    );

    throw error;
  }
}

module.exports = { verifyKhaltiPayment, initializeKhaltiPayment };
