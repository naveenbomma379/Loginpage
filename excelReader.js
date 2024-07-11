const xlsx = require('xlsx');

function getCredentialsFromExcel(filePath) {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log('Excel data:', data); // Log the read data
    return data[0]; // Assuming you only have one row of credentials
  } catch (error) {
    console.error('Error reading Excel file:', error);
    return null;
  }
}

module.exports = getCredentialsFromExcel;