const judo=document.querySelector('.judo')
const atle=document.querySelector('.atle')
const kara=document.querySelector('.kara')
const fute=document.querySelector('.fute')
const nata=document.querySelector('.nata')
const logo=document.querySelector('.logo')

function go(a,b){
    let dnone, dblock
if (b==1){
    dnone=judo
}
else if(b==2){
    dnone=atle
}
else if (b==3){
    dnone=kara
}
else if (b==4){
    dnone=fute
}
else if (b==5){
    dnone=nata
}
else if (b==6){
    dnone=logo
}
dnone.style.display=('none')
if (a==1){
    dblock=judo
}
else if(a==2){
    dblock=atle
}
else if (a==3){
    dblock=kara
}
else if (a==4){
    dblock=fute
}
else if (a==5){
    dblock=nata
}
else if(a==6){
    dblock=logo
}
dblock.style.display=('block')
}