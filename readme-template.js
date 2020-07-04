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


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contact

* ${email}
* ${github}

    `;
  };
