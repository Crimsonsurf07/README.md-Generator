//  // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if(license === 'Apache') {
//     return '![License: Apache](https://img.shields/io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/license/Apache-2.0)'
//   }
//   if(license === 'Unlicense') {
//     return '';
//   }
//   if(license === 'MIT') {
//     return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/license/MIT)'
//   }
//   if(license === 'Berkeley Source Discribution (BSD)') {
//     return '[License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)(https://opensource.org/license/BSD_3-Clause)'
//   }
//   if(license === 'GNU General Public License (GPL)') {
//     return '![License: GPL v3](https://img.shields.io/badge/GPLv3-blue.svg)(https://www.gnu.org/license/gpl-3.0)'
//   }
//   if(license === 'Mozilla Public License (MPL)') {
//     return '[License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0_brightgreen.svg)(https://opensource.org/license/MPL-2.0)'
//   }
//   if(license === 'Eclipse Public License (EPL) (BSD)') {
//     return '[License: EPL](https://img.shields.io/badge/License-EPL_1.0-red.svg)(https://opensource.org/license/EPL-1.0)'
//   }
  
// };


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   const licenseSection = `${license}`
//   if(licenseSection === true) {

//     return licenseSection;
//   }
//   console.log('');
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description:
  - ${answers.description}

  ## Table Of Contents
  - [License](#license)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## License

  - ${answers.license}

  Refer to [https://choosealicense.com/](https://choosealicense.com/)
  
  ## Installation:
  - ${answers.installation}

  ## Usage:
  - ${answers.usage}


  ## Contributions:
  ${answers.contributions}

  ## Contact Information:
  - GitHub: [${answers.github}](https://github.com/${answers.github})
  - Email: [${answers.email}](mailto:user@example.com)`;
}


// renderLicenseBadge();
// renderLicenseSection();







module.exports = generateMarkdown;
