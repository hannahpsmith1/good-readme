function generateMarkdown(data) {
  return `

# ${data.projectName}

## Project Description 
${data.projectDesc}

## Deployed Link
[Deployed Link](${data.deployed})
[Author's Github](https://wwww.github.com/${data.githubname})

## Table of Contents
*[Installation](##Installation)  
*[Usage](##Usage)  
*[License](##License)  
*[Contributing](##Contributing)  
*[Tests](##Tests)    
*[Questions](##Questions)  
*[GIFS if any](##Gifs)  

## Installation 

${data.dependencies}

## Usage 

${data.repoKnowledge}

## License
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Contributing to a Repo

${data.repoContribute}

## Tests for Repo

${data.testCommands}

## Questions

${data.questions}


## Author's Info  
- Author's Email: ${data.email}

## GIFs for context
![gifs](${data.addGIF})


`


}

module.exports = generateMarkdown;

