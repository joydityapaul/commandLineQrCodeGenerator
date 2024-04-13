import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Type in your URL, press enter and get your qr code image in the current directory:",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_jpg = qr.image(url, { type: 'png' });
    qr_jpg.pipe(fs.createWriteStream('yourQrCode.png'));
  });