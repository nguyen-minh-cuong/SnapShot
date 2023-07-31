export default function Portrait(props)   {
  return(  <>
    { props.portraitInput.map((link) =>  (<img alt="some text" class="img" src={link}/>) )}
    </> )
} 