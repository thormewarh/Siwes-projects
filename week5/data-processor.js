const fs = require("fs/promises");
const path = require("path");

// Get output filename from command line
const fileName = process.argv[2] || "users";

// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

async function processData() {
  try {
    // 1. Fetch data from API
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();

    // 2. Filter out users with unwanted domains
    const filteredUsers = users.filter(
      user => !user.email.endsWith("@biz.mail.ru")
    );

    // 3. Transform the data using map()
    const transformedUsers = filteredUsers.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
      location: `${user.address.city}, ${user.address.zipcode}`,
      company: user.company.name
    }));

    // 4. Use reduce() to calculate metadata
    const totalUsers = users.reduce(count => count + 1, 0);

    const filteredCount = totalUsers - transformedUsers.length;

    // 5. Create output folder
    const outputDir = path.join(__dirname, "output");
    await fs.mkdir(outputDir, { recursive: true });

    // 6. Write transformed data to JSON
    const jsonPath = path.join(outputDir, `${fileName}.json`);

    await fs.writeFile(
      jsonPath,
      JSON.stringify(transformedUsers, null, 2)
    );

    // 7. Create summary report
    const report = `
DATA PROCESSING REPORT
======================

Execution Timestamp: ${new Date().toISOString()}
Total Records: ${totalUsers}
Processed Records: ${transformedUsers.length}
Filtered Items: ${filteredCount}
Output File: ${fileName}.json
`;

    const reportPath = path.join(outputDir, "summary report.txt");

    await fs.writeFile(reportPath, report.trim());

    console.log("Data processing completed successfully!");
    console.log(`JSON file: output/${fileName}.json`);
    console.log("Report: output/summary report.txt");

  } catch (error) {
    console.error("Error processing data:", error.message);
  }
}

processData();