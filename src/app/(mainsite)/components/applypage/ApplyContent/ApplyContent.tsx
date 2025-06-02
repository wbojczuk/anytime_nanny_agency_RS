import styles from './applycontent.module.css';

export default function ApplyContent(){
return (
 <div className={styles.applyContent}>
<div className="center">
    <div className={styles.formWrapper}>
        <div className={styles.formContent} dangerouslySetInnerHTML={{__html: `<script type="text/javascript" src="https://form.jotform.com/jsform/251526194582158"></script>`}}>
          
        </div>
    </div>
</div>
 </div>
)};