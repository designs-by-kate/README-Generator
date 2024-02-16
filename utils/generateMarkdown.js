// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(data.license)}-brightgreen)
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} License.
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions or feedback, feel free to contact me:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
