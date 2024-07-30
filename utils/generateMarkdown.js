// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT':
          return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'Apache':
          return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      case 'GPL':
          return '![License: GPL](https://img.shields.io/badge/License-GPL%20v3-blue.svg)';
      default:
          return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'Apache':
          return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL':
          return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
      default:
          return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'N/a') {
      return '';
  }

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `
## License
This project licensed by ${license}.
${badge}
${link}
`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#install)
- [Tests](#test)
- [Usage](#usage)
- [Contributing](#contributions)
- [License](#license)
- [Questions](#questions)

## Install
${data.install}

## Testing
${data.test}

## Usage
${data.usage}

## Contributions
${data.contributions}

## License
${renderLicenseSection(data.license)}

## Questions
If you have any questions, reach out to me at [${data.email}](mailto:${data.email})! My GitHub: [${data.username}](https://github.com/${data.username}).
`;
};

export default generateMarkdown;