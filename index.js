const hero = ['Ivan'];
const native = ['York', 'Of'];
const destination = ['Poltava', 'In'];
const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `violet`];
let rainbow = [];
let TdColor = [];
let TdText = [];

rainbow = rainbow.concat(destination, native, hero);
rainbow = rainbow.reverse();
rainbow.shift();
rainbow.pop();
rainbow.unshift(`Richard`);
rainbow.splice(2, 0, `Gave`, `Battle`);
rainbow.push(`Vain`);

console.log(rainbow);
console.log(rainbow.length === colors.length);

for (let i = 0; i < colors.length; i++) {
    TdColor.push(`<td><span class="circle" style="background-color:${colors[i]}"</span></td>`);
    TdText.push(`<td>${rainbow[i]}</td>`);
}

document.write(`<table>
<tr>
    ${TdColor.join(``)}
</tr>
<tr>
    ${TdText.join(``)}
</tr>
</table>`);
