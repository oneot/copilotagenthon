const fs = require("fs");

const accountId = parseInt(process.argv[2], 10);
const user = process.argv[3];

if (!Number.isInteger(accountId)) {
  console.error("Invalid accountId");
  process.exit(1);
}

const filePath = "accounts.json";
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

if (!data.accounts || !Array.isArray(data.accounts)) {
  console.error("Invalid accounts.json format: missing data.accounts array");
  process.exit(1);
}

const account = data.accounts.find((a) => a.id === accountId);

if (!account) {
  console.error("Account not found");
  process.exit(1);
}

if (account.status === "reserved") {
  console.error("Account already reserved");
  process.exit(1);
}

account.status = "reserved";
account.reserved_by = user;
account.reserved_at = new Date().toISOString();

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
console.log(`Account ${accountId} reserved by ${user}`);
