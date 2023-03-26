import '../css/buttonMd.css'
export default function ButtonMd(props) {
 return (
  <div className="button-md-container" role='button' id={props.id}>
   <button className="button-md" type={props.type} name={props.name}>{props.name}</button>
  </div>
 )
}