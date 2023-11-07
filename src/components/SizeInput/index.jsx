import styles from "./styles.module.css"
import PropTypes from "prop-types"

SizeInputp.propTypes ={
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func.isRequired
}

export default

function SizeInputp(props) {

    return (        
      <input 
        className={styles.wrapper}
        type="number" 
        id='passwordSize' 
        min={5}
        max={99}
        value={props.passwordSize}
        onChange={ (ev) => props.setPasswordSize(+ev.target.value)  }
      />
        
    )
}