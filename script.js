const count=document.getElementById('numchar');
const ok=document.getElementById('sub');
const upper=document.getElementById('upper')
const lower=document.getElementById('lower')
const number=document.getElementById('number')
const sym=document.getElementById('symbol')
const passw=document.getElementById('passw')

const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase='abcdefghijklmnopqrstuvwxyz'
const numbers='1234567890'
const symbol='!@~#$%^&*()_+-=}]{[|:;>.<,/?'

ok.onclick=function() {
    passw.innerText =`Random Password: ${generate(count.value,upper.checked,lower.checked,number.checked,sym.checked)}`
}
function generate(count,up,low,num,sym){
    let pas='';
    if (up == true){
        pas+=uppercase;
    }
    if(low==true){
        pas+=lowercase;
    }
    if(num==true){
        pas+=numbers;
    }
    if(sym==true){
        pas+=symbol;
    }
    let pass='';
    for(let i=0; i<count; i++){
        let ran;
        ran=Math.floor(Math.random()*pas.length)
        pass+=pas[ran];
    }
    if (pass=='') throw alert("Enter Requirements"), 'exit';
    if (sym==false && num==false&& low==false && up == false) throw alert("Select Requirements"), 'exit';
    if (count>20) throw alert("Maximum 20 Characters Allowed"), 'exit';

    return pass;


}