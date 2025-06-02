import styles from './applycontent.module.css';
// @ts-ignore
import JotFormReact from "jotform-react"
export default function ApplyContent(){
return (
 <div className={styles.applyContent}>
<div className="center">
    <div className={styles.formWrapper}>
          <JotFormReact formURL="https://form.jotform.com/251526194582158" />

    </div>
</div>
 </div>
)};