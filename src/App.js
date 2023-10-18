import './App.css';
import CP from './components/CP';

function App() {
  const onclick = ()=>{
    let x= document.getElementById("boxes");
    let y=document.getElementById("h3");
    if(x.style.display ==="none")
    {
        x.style.display="flex";
    y.style.display="none";
    console.log("hi")

    }
    else{
        x.style.display="none";
        y.style.display="flex";
    }
  }
  const select =(event)=>{
    let a=document.getElementById("h3")
    let x= document.getElementById("boxes");
    let y=event.target.style.backgroundColor;
    let z=document.getElementById('btn');
    x.style.display="none";
    a.style.display="flex";
    a.style.color=y;
    a.innerText="Click on the button to display the list of colors";
    z.style.backgroundColor=y;
    console.log(y);
  }
  return (
  <>
  {/* Color picker Component */}
 <CP  onclick={onclick} select={select}/>
  </>
  );
}

export default App;
