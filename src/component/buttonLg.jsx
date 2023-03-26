import '../css/buttonLg.css'
export default function ButtonLg(props) {
 return (
  <div className="button-lg-container" type={props.type} role='button' id={props.id}>
   <button className="button-lg" type={props.type} name={props.name} >{props.name}</button>
  </div>
 )
}
