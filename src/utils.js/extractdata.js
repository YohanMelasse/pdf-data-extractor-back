import fs from "fs";
import Pdf from "pdf-parse";



const extractData = async () => {

  const patterns = {
  siret: /\d{3} \d{3} \d{3} \d{5}/,
  tva: /(FR\d{8}|DE\d{8})/,
  mobilePhoneNumber: /(07 ([0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2})|06 ([0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}))/,
  classicPhoneNumber: /01 ([0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2})/
};

  try {
    const dataBuffer = fs.readFileSync('/Users/malespion/Downloads/Facture n° F5008872.pdf');
    const pdf = await Pdf(dataBuffer);
    const data = pdf.text;

    let extractedData = {};

    for (const [key, regex] of Object.entries(patterns)) {
      const match = data.match(regex);
      extractedData[key] = match ? match[0] : null;
    }

    console.log(extractedData)
  
    return extractedData;

  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
};

export { extractData };
