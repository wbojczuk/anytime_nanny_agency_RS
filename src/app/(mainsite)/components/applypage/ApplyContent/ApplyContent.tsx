import styles from './applycontent.module.css';
// @ts-ignore
import JotformEmbed from "react-jotform-embed"

export default function ApplyContent(){
return (
 <div className={styles.applyContent}>
<div className="center">
    <div className={styles.formWrapper}>
        <JotformEmbed src="https://form.jotform.com/251526194582158" />
    </div>
</div>
 </div>
)};