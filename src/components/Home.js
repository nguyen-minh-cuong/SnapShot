
export default function Home(props)   {
  
  console.log(props.homInput)
  return(  <>
    { props.homeInput.map((link) =>  (<img alt="some text" class="img" src={link}/>) )}
    </> )
} 
