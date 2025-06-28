import fs from "fs";
import Pdf from "pdf-parse";

const extractData =  async () => {
try {
  let pdfData = [];

  let dataBuffer = fs.readFileSync('/Users/malespion/Downloads/Convocation.AGO.Signé.pdf');
  const pdf = await Pdf(dataBuffer);
  const data = pdf.text;

// send pdf text into an array.
  pdfData.push(data);
// convert array into a string.
  const invoiceAsString = pdfData.join("");

// replace all ' " ' by "N" using regex.
  const invoiceWithCorrectedCaracters = invoiceAsString.replace(/"/g, "N");

// An array of all usefull regex for extracting data.
let matchingregEx = [/\d{3} \d{3} \d{3} \d{5}/, /DE\d{8}/, /07 \d{2} \d{2} \d{2} \d{2}/, /01 \d{2} \d{2} \d{2} \d{2}/];




// identifers name.
let mainDataIdentifier = ["siret", "tva", "mobilePhoneNumber","classicPhoneNumber"];


// on parcours le tableau en filtrant toute correspondance par rapport à nos regex.
const matches = matchingregEx
  .map(regex => ({
    regex,
    match: invoiceWithCorrectedCaracters.match(regex)
  }))
  .filter(result => result.regex && result.match); 

let invoicesData = [];

// for each elements we add all matching result into a receiving array
matches.forEach(result => {
  invoicesData.push(result.match[0]);
});
// new key/value object array creating from a mix of two arrays
const result = mainDataIdentifier.map((key, index) => {
  return { [key]: invoicesData[index] };
});
console.log(result);
} catch (error) {
  console.error(`An error occured: ${error}`);
}};

export {extractData};