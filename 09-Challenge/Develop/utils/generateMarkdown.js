// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseDomain = "";
  if (license === "MIT") {
    licenseDomain = "MIT";
  }
  else if(license === "APACHE") {
    licenseDomain = "Apache-2.0";
  }
  else if(license === "GPL") {
    licenseDomain = "gpl-license";
  }
  else if(license === "BSD") {
    licenseDomain = "BSD-2-Clause";
  }
  else {
    return ``
  }
  return `
  ![License Link](https://opensource.org/licenses/${licenseDomain})
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, year, name) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  return `
  ${licenseBadge}
  ${licenseLink}
  © ${year} ${name}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.License)}

  ## Table of Contents 
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage Information](#Usage)
  * [Contribution Guidelines](#Contributions)
  * [Tests](#Tests)
  * [License](#License)
  * [Contact Information](#ContactInfo)
  ## Description
  ${data.description}
  ## Installation Instructions
  ${data.install_instructions}
  ## Usage Information
  ${data.usage_information}
  ## Contribution Guidelines 
  ${data.contribution_guidelines}
  ## Tests 
  ${data.test_instruction}
  ## License
  ${renderLicenseSection(data.license, data.year, data.dev_name)}
  
  ## Contact Information 
  For questions, queries or comments, contact me here: 
  [https://github.com/${data.user}](https://github.com/${data.user})

`;
}

module.exports = generateMarkdown;
