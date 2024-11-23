const gomb =document.getElementById('gomb');
const dolgozat = document.getElementById('dolgozat');

gomb.addEventListener('click',async function(){
    const data= await fetch("https://yesno.wtf/api");
    const json= await data.json();
    console.log(json);
    
    gomb.style.display='none';

    dolgozat.textContent=json.answer=="yes"?"NANÁ!":"MA NE!";
    document.body.style.backgroundImage = `url('${json.image}')`;
});