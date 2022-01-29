import "./Link.css";

export default function Link(props) {
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}