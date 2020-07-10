function generateMarkdown(data) {
  return `
# ${data.projectName}
## description 
${data.projectDesc}
## License
${data.license}

`


}

module.exports = generateMarkdown;

