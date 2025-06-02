import styles from './hiringcontent.module.css';
// @ts-ignore
import JotFormReact from "jotform-react"
export default function HiringContent(){
return (
 <div className={styles.applyContent}>
<div className="center">
    <div className={styles.formWrapper}>
        <JotFormReact formURL="https://form.jotform.com/251526182498161" />
    </div>
</div>
 </div>
)};