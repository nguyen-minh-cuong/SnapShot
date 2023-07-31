export default function Mountain(props)   {
  return(  <>
    { props.mountainInput.map((link) =>  (<img alt="some text" class="img" src={link}/>) )}
    </> )
} 
