module.exports = templateData => {
    const {
        name,
        description,
        installation,
        usage,
        contributorsTrue,
        license,
        github,
        email
    } = templateData;
    console.log(templateData);
  
    return `
# ${name}

## Description 

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contact](#Contact)


## Installation

${installation}


## Usage 

${usage}
 
## Credits

${contributorsTrue}

## License

${license}

## Contact

* ${email}
* ${github}

    `;
  };
