import './Greetings.css';

function Greetings(props) {
    let langArr = [["de", "Hallo"], ["en", "Hello"], ["es", "Hola"], ["fr", "Bonjour"]];
    let greetingWord; 
    langArr.forEach(item =>{
        if(props.lang === item[0]) {
            greetingWord = item[1]
        }
    });
  return (
    <div className="greet-container">
        <h4>{greetingWord}, {props.children}!</h4>
    </div>
  )
}

export default Greetings