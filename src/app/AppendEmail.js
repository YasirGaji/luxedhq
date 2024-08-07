function appendEmailToSheet(email) {
  const ss = SpreadsheetApp.openById('your-spreadsheet-id');
  const sheet = ss.getSheetByName('Sheet1'); // Replace with your sheet name
  sheet.appendRow([email]);
}