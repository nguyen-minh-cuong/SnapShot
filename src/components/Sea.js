export default function Sea(props)   {
  return(  <>
    { props.seaInput.map((link) =>  (<img alt="some text" class="img" src={link}/>) )}
    </> )
} 