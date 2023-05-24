// Select color input
let myColor = document.getElementById("colorPicker");
// Select size input
let myInputHeight = document.getElementById("inputHeight");
let myInputWidth = document.getElementById("inputWidth");
let myTable  = document.getElementById("pixelCanvas");
let mysubmitId = document.getElementById("submitId");



// When size is submitted by the user, call makeGrid()
mysubmitId.addEventListener("click",makeGrid)

function makeGrid( event ) {
  event.preventDefault();

  myTable.innerHTML="";
 


  let InputHeight = myInputHeight.value; 
  let InputWidth =  myInputWidth.value;
  console.log(InputHeight);
  console.log(InputWidth);
 
  for(let i = 0 ; i < InputHeight ; i++)
  {

    let myTr = document.createElement("tr");
    myTable.appendChild(myTr);
    for(let j=0 ; j < InputWidth ; j++)
    {
      let myTd = document.createElement("td");
      myTd.className="tdClass";
      myTr.appendChild(myTd);
      myTd.addEventListener("click",func);
    }
  }
}

function func(event){
    event.target.style.backgroundColor=myColor.value;
}


