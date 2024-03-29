import styles from "./ButtonsContainer.module.css"

const ButtonsContainer=({onButtonClick})=>{
    const ButtonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return <div className={styles.buttonsContainer}>
    {ButtonNames.map((item)=><button className={styles.button} 
    //calling onbuttonclick with item to know which button is clicked.
    onClick={()=>onButtonClick(item)}>{item}</button>)}
  </div>
}
export default ButtonsContainer;