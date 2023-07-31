const Form = (props) => {
  const submitted = async (e) => {
    e.preventDefault();
    console.log(props.inputIn);
    const link = await props.findImg(props.inputIn); 
    console.log(link);
    props.setHome(link); 
    props.setMountain(link); 
    props.setPortrait(link); 
    props.setSea(link); 
    props.setCity(link); 
    const myForm = document.getElementById("myForm");
    myForm.reset()
    }
  return (
    <>

    <form id="myForm" onSubmit={submitted}>
      <label>  
      <h1 id="header">SnapShot</h1> </label>
      <input type="text" id="input" placeholder="Find photo" value={props.inputIn}  onChange={(e) => {
        props.setInput(e.currentTarget.value)
      }}/>
      <button id="toSubmit" type="submit">Submit</button>
     
     </form>
    </>
    )
  
}

export default Form