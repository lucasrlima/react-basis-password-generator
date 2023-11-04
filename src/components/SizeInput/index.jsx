import styles from "./styles.module.css"



export default

function SizeInputp({ ...props}) {

    return (        
      <input 
        className={styles.wrapper}
        {...props}
      />
        
    )
}