import styles from "./styles.module.css"

export default

// eslint-disable-next-line react/prop-types
function Button({Text, ...props }) {
    return (
        <button className={styles.wrapper} {...props} >
            {Text}
        </button>
    )
}
