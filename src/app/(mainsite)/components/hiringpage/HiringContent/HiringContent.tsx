import styles from './hiringcontent.module.css';

export default function HiringContent(){
return (
 <div className={styles.applyContent}>
<div className="center">
    <div className={styles.formWrapper}>
        <div className={styles.formContent} dangerouslySetInnerHTML={{__html: `<script type="text/javascript" src="https://form.jotform.com/jsform/251526182498161"></script>`}}>
          
        </div>
    </div>
</div>
 </div>
)};