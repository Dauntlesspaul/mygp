import {useState,useRef,useEffect} from "react";
import { FaGraduationCap } from 'react-icons/fa';
import {MdHelpCenter} from 'react-icons/md';
//import logo from './logo.svg';
import './App.css';

function App() {
  const [coursecode,setCoursecode]=useState(''); 
  const [outputs,setOutputs]=useState([]);
  const [total,setTotal]=useState(0);
  const [gp,setGp]=useState();
  const [del,setDelete]=useState();
  const [delC,setdelc]=useState('');
  const unit=useRef();
  const grade=useRef();
  const result=useRef();
  const season=useRef();
  const calbutton=useRef();
  const resetb=useRef();
  const tuc=useRef();
  const input=useRef();
  const cd=useRef();
  const cu=useRef();
  const g=useRef();
  const addb=useRef();
  const popup=useRef();
  const help=useRef();
  const warn=useRef();
  const warnlayer=useRef();
  const add=()=>{
    const g=grade.current.options[grade.current.selectedIndex].text;
 const list={
  code:coursecode,
  unit:unit.current.value,
  gradevalue:grade.current.value,
  grade: grade.current.options[grade.current.selectedIndex].text,
  id:Math.random()
 }
 if(coursecode >0 && season.current.options[season.current.selectedIndex].text==='Sessional'){
if(coursecode>5){
  alert('GPA cannot exceed 5.00')
}
else if(coursecode<=5){ 
  const list={
    code:outputs.length==0 ? '100'
    :outputs.length===1 ? '200'
    :outputs.length===2 ? '300'
    :outputs.length===3 ? '400'
    :outputs.length===4 ?'500'
    :'600',
    unit:'',
    grade:Number(coursecode).toFixed(2)
  }
  setOutputs([...outputs,list]);
  setCoursecode('')
  switch(outputs.length){
    case 0:input.current.setAttribute('placeholder','Enter your 200-level GPA');
    break;
    case 1:input.current.setAttribute('placeholder','Enter your 300-level GPA');
    break;
    case 2:input.current.setAttribute('placeholder','Enter your 400-level GPA');
    break;
    case 3:input.current.setAttribute('placeholder','Enter your 500-level GPA');
    break;
    case 4:input.current.setAttribute('placeholder','Enter your 600-level GPA');
    break;
   default:
  input.current.setAttribute('placeholder','you have exceeded the maximum level');
  }
 
   if(outputs.length===1){
    calbutton.current.style.display='block'; 
    calbutton.current.textContent='Calculate my CGPA' ; 
  }
  if(outputs.length===5){
    addb.current.style.display='none';
  }
}
 }
else if (coursecode==='' || g==='Select grade' || unit.current.value==='true'){
  alert('fill inputs correctly');
 }
 else if(coursecode!=='' || g!=='Select grade' || unit.current.value!=='true'){
  season.current.setAttribute('disabled',true);
  tuc.current.style.display='flex';
  resetb.current.style.display='inline';
  setOutputs([...outputs,list]);
  setCoursecode('');
  unit.current.selectedIndex=0;
  grade.current.selectedIndex=0;
  const val=season.current.options[season.current.selectedIndex].text;
  if(val==='Semester/A Session'){
  calbutton.current.style.display='block';
  calbutton.current.textContent='Calculate my GPA'
  }
}
   }
  useEffect(()=>{
  
   if(outputs.length>0){
    var total=0;
    for(var i=0;i<outputs.length;i++){
 var list=[...outputs];
   total+=Number(list[i].unit);
    }
 setTotal(total);}
 else if(outputs.length===0){
  setTotal(0);
  calbutton.current.style.display='none';
  result.current.style.display='none';
  tuc.current.style.display='none';
 }
},[outputs]);

const calgp=()=>{
  result.current.style.display='block';
  var list=[...outputs];
  const val=season.current.options[season.current.selectedIndex].text;
 if(val==='Semester/A Session'){
  var totalp=0;
  for(var i=0;i<list.length;i++){
let myUnit=Number(list[i].unit);
let myValue=Number(list[i].gradevalue);
let multiplication=myUnit * myValue;
totalp+=multiplication;
  }
  const final=totalp/total;
const aprxm=final.toFixed(2)
setGp('Your GPA is '+ aprxm );
}
else if(val==='Sessional'){
  var totalp=0;
  for(var i=0;i<list.length;i++){
  totalp+=Number(list[i].grade);
  }
  const sum=Number(list.length);
    const aprxm=(totalp/sum).toFixed(2);
  if(aprxm>=4.50){
    setGp('Your CGPA is '+ aprxm +' (FIRST CLASS)')
   }
   else if(aprxm>=3.50){
    setGp('Your CGPA is '+ aprxm + ' (SECOND CLASS UPPER)')
   }
   else if(aprxm>=2.50){
    setGp('Your CGPA is ' + aprxm + ' (SECOND CLASS LOWER)');
   }
   else(setGp('Your CGPA is '+aprxm ))
}
}
const reset=()=>{
  setCoursecode(''); 
  setOutputs([]);
  setTotal(0);
  setGp();
  calbutton.current.style.display='none';
  season.current.removeAttribute('disabled');
  resetb.current.style.display='none';
  result.current.style.display='none';
  tuc.current.style.display='none';
  cd.current.textContent='COURSE CODE';
  cu.current.textContent='COURSE-UNIT';
  g.current.textContent='GRADE';
  unit.current.style.display='inline';
  grade.current.style.display='inline';
  season.current.selectedIndex=0;
  unit.current.selectedIndex=0;
  grade.current.selectedIndex=0;
  input.current.removeAttribute('type');
  input.current.removeAttribute('placeholder');
  addb.current.style.display='inline';
  input.current.setAttribute('placeholder','Enter your course code');
}
const levels=()=>{
  if(season.current.options[season.current.selectedIndex].text==='Sessional'){
  input.current.setAttribute('placeholder','Enter your 100-level GPA');
  resetb.current.style.display='inline';
  input.current.setAttribute('type','number');
  unit.current.style.display='none';
  grade.current.style.display='none';
  season.current.setAttribute('disabled',true);
  cd.current.textContent='LEVEL';
  cu.current.textContent='';
  g.current.textContent='MY-GPA';
  }
}
const clearPopup=()=>{
 popup.current.style.display='none';
 help.current.style.display='none';
}
const info=()=>{
  popup.current.style.display='block';
  help.current.style.display='block';
}
const warning=(key)=>{
  const val=season.current.options[season.current.selectedIndex].text;
  if(val==='Semester/A Session'){ 
  warn.current.style.display='block';
  warnlayer.current.style.display='block';
  const list=[...outputs];
   const upL=list.filter(sort=>sort.id===key);
   setdelc(upL[0].code.toUpperCase());
  setDelete(key);
  }
}
const clearwarning=()=>{
  warn.current.style.display='none';
  warnlayer.current.style.display='none';
}
const sort=()=>{
  const value=del;
  const list=[...outputs];
 const updatedL=list.filter(sort=>sort.id!==value);
 setOutputs(updatedL);
 warn.current.style.display='none';
  warnlayer.current.style.display='none';
  result.current.style.display='none';
}
  return (
    <div className="App">
      <div ref={warn} className="warn">Are you sure you want to delete {delC} ?<div style={{display:'flex',justifyContent:'space-around',marginTop:'5%' }}><button style={{backgroundColor:'rgb(58, 46, 138)',color:'white', borderRadius:'5px',border:'1px solid white'}} onClick={sort} >YES</button><button  style={{backgroundColor:'rgb(58, 46, 138)',color:'white', borderRadius:'5px',border:'1px solid white'}} onClick={clearwarning}>NO</button></div></div>
      <div ref={warnlayer}  className="warnpopup"></div>
    <div ref={popup} onClick={clearPopup} className="popup"></div>
     <div ref={help} className='about'><header>About App</header><h4 style={{marginTop:'-1px'}}><strong>MY GPA/CGPA CALCULATOR </strong> is a 5.0 based grade point calculator, designed to facilitate easy calculation of your GPA/CGPA as this has become a herculean task amongst students in the higher institutions in recent years. </h4>
     <header>How to use</header><h4 style={{marginTop:'-1px'}}>To calculate your grade point average(GPA) for a particular semester or for a full Session(two semesters) select the semester/A session option in the dropdown menu on the first add.<br/>To calculate your cummulative grade point average(CGPA) for several sessions(levels) select the sessional option in the dropdown menu.<br/>Click on the reset button to take the app back to default,you can also remove each courses from the list by clicking on the desired course to be removed from the list. 
     </h4>
  <header>About The Developer</header><h4 style={{marginTop:'-1px'}}>OLADIPUPO PAUL ROTIMI, is a Front-End Developer and a Student of Industrial Chemistry in the University of Ilorin,Kwara State,Nigeria.
  <br/>contact me via mail(dauntlesspaulwit@gmail.com) and via whatsapp(08166376786) </h4></div>
     <div onClick={info} className="helpicon"> < MdHelpCenter className="icon" /> </div>
      <h1 style={{color:"white"}}><FaGraduationCap />MY GPA/CGPA CALCULATOR</h1>
    <div className="controlunit"><input value={coursecode} ref={input} onChange={(e)=>setCoursecode(e.target.value)} placeholder='Enter course code'/>
   <div className="sab"> <select ref={unit}><option disabled selected value>Select unit</option>
    <option value='6'>6</option>
    <option value='5'>5</option>
    <option value='4'>4</option>
    <option value='3'>3</option>
    <option value='2'>2</option>
    <option value='1'>1</option>
    </select><select ref={grade}><option disabled selected value>Select grade</option>
    <option value='5'>A</option>
    <option value='4'>B</option>
    <option value='3'>C</option>
    <option value='2'>D</option>
    <option value='1'>E</option>
    <option value='0'>F</option></select>
    <select ref={season} onChange={levels}>{/*<option>Semester</option>*/}
    <option>Semester/A Session</option>
    <option >Sessional</option></select>
    <button className="add" ref={addb} onClick={add}>ADD</button><button className="reset" ref={resetb} onClick={reset}>RESET</button></div></div>
   <div className="titlecontainer"><div className="titleset"><div ref={cd}>COURSE CODE</div><div className="cug"><div ref={cu}>COURSE-UNIT</div><div ref={g}>GRADE</div></div></div></div>
   {outputs.map(list=>{
    return  <div className="listcontainer"><div className="list"><p onClick={()=>warning(list.id)} style={{display:'flex',justifyContent:'space-between',backgroundColor:'rgb(70, 56, 158)',alignContent:'center'}} key={list.id}><div>{list.code.toUpperCase()}</div><div className="ugblock"><div>{list.unit}</div><div>{list.grade}</div></div></p></div></div>
   })}
      <div ref={tuc} className="tudcontainer"><div className="tud">Total Course Units: {total}</div></div>
   <div style={{display:'flex',justifyContent:'center',marginTop:'8px'}}><button className="calbutton" ref={calbutton} onClick={calgp}>Calculate my GPA</button></div>
   <div className="resultset"><div className="result" ref={result}>{gp}</div></div>
  </div>
  );
}

export default App;
