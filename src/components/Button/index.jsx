import styles from "./styles.module.css"

export default

// eslint-disable-next-line react/prop-types
function Button({ Text, className, ...props }) {
    return (
      <button className={className ? className : styles.wrapper} {...props}>
        {Text}
      </button>
    );
  }