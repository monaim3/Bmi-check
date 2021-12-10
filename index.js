function getBmi(){
    let weight =document.getElementById('weight').value;
    let height =document.getElementById('height').value;
    height=height*12;
    height=height*0.025;
    let newBmivalue=weight/(height*height)
     newBmivalue=Math.round(newBmivalue)
    document.getElementById('value').value=newBmivalue;
}
  