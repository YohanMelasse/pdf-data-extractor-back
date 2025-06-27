import fs from "fs";
import Pdf from "pdf-parse";

const extractData =  async () => {
try {
  let pdfData = [];
  let invoiceData = [];

  let dataBuffer = fs.readFileSync('/Users/malespion/Downloads/Convocation.AGO.Signé.pdf');
  const pdf = await Pdf(dataBuffer);
  const data = pdf.text;

// send pdf text into an array.
  pdfData.push(data);
// convert array into a string.
  const invoiceAsString = pdfData.join("");

// replace all ' " ' by "N" using regex.
  const invoiceWithCorrectedCaracters = invoiceAsString.replace(/"/g, "N");

// looking for string which contain this following regex format.
  const siretMatch = invoiceWithCorrectedCaracters.match(/\d{3} \d{3} \d{3} \d{5}/);

// recsearch the first index of array 
// and remove space inside a string between each caracters.
  const siret = siretMatch[0].replace(/\s/g, '');

// push data into an array.
  invoiceData.push(["siret", siret]);

  // convert each key/value contain on arrays into a key/value Object.
  const dataAsObject = Object.fromEntries(invoiceData);
  console.log(dataAsObject);

} catch (error) {
  console.error(`An error occured: ${error}`);
}};

export {extractData};