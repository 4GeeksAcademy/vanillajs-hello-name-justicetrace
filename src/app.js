/* eslint-disable */
const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extensions = ['.com', '.net'];

const domain = [];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extensions.length; l++)
                domain.push(`${pronoun[i]}${adj[j]}${noun[k]}${extensions[l]}`)
        }
    }
}
console.log(domain);