export default function City(props)   {
  return(  <>
    { props.cityInput.map((link) =>  (<img alt="some text" class="img" src={link}/>) )}
    </> )
} 