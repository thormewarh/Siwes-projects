
const fs = require("fs/promises");
const path = require("path");

// Get the file path from the command line
const inputFile = process.argv[2];

async function analyzeLogs() {
  try {
    // Check if a file path was provided
    if (!inputFile) {
      throw new Error("Please provide a log file path.");
    }

    // Read the log file
    const data = await fs.readFile(inputFile, "utf8");

    // Convert JSON text into JavaScript data
    const logs = JSON.parse(data);

    // Make sure the data is an array
    if (!Array.isArray(logs)) {
      throw new Error("Invalid log format. Expected an array of logs.");
    }

    // Count all logs
    const totalLogs = logs.length;

    // Filter only ERROR logs
    const errorLogs = logs.filter(
      (log) => log.level && log.level.toUpperCase() === "ERROR"
    );

    // Count error logs
    const errorCount = errorLogs.length;

    // Create the summary
    const summary = {
      totalLogs: totalLogs,
      errorCount: errorCount,
      errors: errorLogs
    };

    // Create the output folder if it doesn't exist
    const outputFolder = path.join(__dirname, "output");
    await fs.mkdir(outputFolder, { recursive: true });

    // Create the output file path
    const outputFile = path.join(outputFolder, "report.json");

    // Write the summary to report.json
    await fs.writeFile(
      outputFile,
      JSON.stringify(summary, null, 2),
      "utf8"
    );

    console.log("Log analysis completed successfully.");
    console.log(`Total logs: ${totalLogs}`);
    console.log(`Error logs: ${errorCount}`);
    console.log(`Report saved to: ${outputFile}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}



analyzeLogs();

