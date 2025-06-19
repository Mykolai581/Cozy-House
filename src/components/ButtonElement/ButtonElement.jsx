import "./ButtonElement.css";

export default function ButtonElement({
  text,
  style,
  icon,
  children,
  ...props
}) {
  return (
    <button style={style} className="button-element" {...props}>
      {icon && (
        <img
          src={icon}
          alt="icon"
          className="button-icon"
          style={{ maxWidth: 100, marginRight: 15 }}
        />
      )}

      {text}
      {children}
    </button>
  );
}
