let pronoun = ['the','our','my','your'];
let adj = ['great', 'big', 'amazing','wonderful'];
let noun = ['jogger','racoon','journey','page'];
let ext = ['com', 'net', 'cr', 'io', 'us'];
let str="";

for(let i=0; i<pronoun.length;i++){
    for(let j=0; j<adj.length;j++){
        for(let k=0; k<noun.length;k++){
            for(let q=0; q<ext.length;q++){
                    str= str + pronoun[i] +adj[j] + noun[k] +"."+ ext[q]+"\n";
            }
        }
    }
}
console.log(str);