import styles from './hiringcontent.module.css';
// @ts-ignore
import JotformEmbed from "react-jotform-embed"
export default function HiringContent(){
return (
 <div className={styles.applyContent}>
<div className="center">
    <div className={styles.formWrapper}>
       <JotformEmbed src="https://form.jotform.com/251526182498161"/>
    </div>
</div>
 </div>
)};