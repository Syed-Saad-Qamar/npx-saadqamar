// #!/usr/bin/env node

const {
  white,
  bold,
  cyanBright,
  italic,
  bgBlack
} = require("colorette");

const work = white(`Web and Mobile App Developer @${cyanBright('IOmechs')}`)
const twitter = cyanBright('https://twitter.com/saadqamar96')
const linkedIn = cyanBright('https://linkedin.com/in/syed-saad-qamar-895a43145')
const github = cyanBright('https://github.com/saadqamar01')
const npx = white('npx saadqamar')

const newline = '\n'
const heading = `${white(italic(bold('  Saad Qamar /')))} ${cyanBright(italic('saadqamar'))}`
const working = `${white(bold('     Work:'))}  ${italic(work)}`
const linkedining = `${white(bold('  LinkedIn:'))} ${italic(linkedIn)}`
const twittering = `${white(bold('  Twitter:'))}  ${italic(twitter)}`
const githubing = `${white(bold('   GitHub:'))}  ${italic(github)}`
const carding = `${white(bold('     Card:'))}  ${italic(npx)}`

let output = `${newline} ${newline} ${heading} ${newline} ${newline} ${newline} ${working} ${newline} ${twittering} ${newline} ${linkedining} ${newline} ${githubing} ${newline}  ${newline} ${carding} ${newline} ${newline}`;

console.log(bgBlack(output));