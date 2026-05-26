async function runTest() {
  console.log("--- Testing Backend Endpoints for Shaikh Salman ---");
  const url = "https://portal.mrlegezt.me/api";

  try {
    // 1. Login
    console.log("Logging in...");
    const loginRes = await fetch(`${url}/student/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "160924733431@lords.ac.in",
        password: "legezt123"
      })
    });

    if (!loginRes.ok) {
      console.error(`Login failed: ${loginRes.status} ${loginRes.statusText}`);
      const errText = await loginRes.text();
      console.error("Error body:", errText);
      return;
    }

    const loginData = await loginRes.json();
    console.log("Login successful! Token:", loginData.accessToken);
    const token = loginData.accessToken;
    const cookie = `portal_access_token=${token}`;

    // 2. Fetch documents
    console.log("\nFetching documents...");
    const docsRes = await fetch(`${url}/documents`, {
      headers: {
        "Cookie": cookie,
        "Authorization": `Bearer ${token}`
      }
    });

    if (!docsRes.ok) {
      console.error(`Fetch documents failed: ${docsRes.status}`);
    } else {
      const docsData = await docsRes.json();
      console.log("Documents Response Success!");
      console.log("Number of documents returned:", docsData.documents ? docsData.documents.length : "undefined");
    }

    // 3. Fetch active exams
    console.log("\nFetching active exams...");
    const examsRes = await fetch(`${url}/student/exams/active`, {
      headers: {
        "Cookie": cookie,
        "Authorization": `Bearer ${token}`
      }
    });

    if (!examsRes.ok) {
      console.error(`Fetch active exams failed: ${examsRes.status}`);
    } else {
      const examsData = await examsRes.json();
      console.log("Active Exams Response Success!");
      console.log("Exams returned:", JSON.stringify(examsData, null, 2));
    }

    // 4. Fetch services
    console.log("\nFetching services...");
    const servicesRes = await fetch(`${url}/student/services`, {
      headers: {
        "Cookie": cookie,
        "Authorization": `Bearer ${token}`
      }
    });

    if (!servicesRes.ok) {
      console.error(`Fetch services failed: ${servicesRes.status} ${servicesRes.statusText}`);
    } else {
      const servicesData = await servicesRes.json();
      console.log("Services Response Success!");
      console.log("Services:", JSON.stringify(servicesData, null, 2));
    }

  } catch (err) {
    console.error("Request failed:", err);
  }
}

runTest();
