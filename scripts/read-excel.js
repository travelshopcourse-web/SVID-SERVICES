const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const workbook = XLSX.readFile(path.join(__dirname, '../SVID PROJECT LIST NEW (1).xlsx'));

// Get all sheet names
const sheetNames = workbook.SheetNames;

console.log('Sheet Names:', JSON.stringify(sheetNames, null, 2));
console.log('\n');

// Process each sheet
const projectData = sheetNames.map(sheetName => {
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  
  console.log(`\n=== ${sheetName} ===`);
  console.log('Columns:', data.length > 0 ? Object.keys(data[0]) : []);
  console.log('Row count:', data.length);
  console.log('Sample data:', JSON.stringify(data.slice(0, 2), null, 2));
  
  return {
    sheetName,
    data
  };
});

// Save to JSON for reference
fs.writeFileSync(
  path.join(__dirname, 'excel-data.json'),
  JSON.stringify(projectData, null, 2)
);

console.log('\n\nData saved to scripts/excel-data.json');
