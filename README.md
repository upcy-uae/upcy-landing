This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development serverr:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Google Sheets App Script

```JS
const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1uxqoR3NB8IWMNKjCXPqD6lDEV0cMTyk2jK2CXkF0R-Y/edit#gid=0");
 //if you have changed your sheet name then replace the below Sheet1 with your sheet name
const sheet = sheets.getSheetByName("Page1");
function doPost(e){
  let data = e.parameter;
  sheet.appendRow([data.Timestamp,data.Name,data.Email,data.Message]);
  return ContentService.createTextOutput("Your message was successfully sent to the Googlesheet database!");
}
```

# Example Commit escription:

### ✍️ Commit Description Template

## ✅ What Was Done?

- ✨ Provide a concise summary of the changes made.
- 📂 List specific actions, like files added, updated, or removed.
- 🚀 Mention any new functionality introduced or refactored.

## 💡 Why Was This Done?

- 🛠️ Explain the purpose of the changes.
- 🐛 Mention the problem being solved or the goal being achieved.
- ⚡ Highlight how this change improves the project (e.g., scalability, performance, maintainability, new feature). -
