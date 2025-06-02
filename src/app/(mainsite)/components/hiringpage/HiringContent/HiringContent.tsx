import styles from './hiringcontent.module.css';

export default function HiringContent(){
return (
 <div className={styles.applyContent}>
<div className="center">
    <div className={styles.formWrapper}>
        
    <iframe
      id="JotFormIFrame-251526182498161"
      title="Employment Application"
     style={{width: "100%", minHeight: "100vh", overflowY: "scroll"}}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src="https://form.jotform.com/251526182498161"
      frameBorder="0"
      
      scrolling="no"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251526182498161']", "https://form.jotform.com/")</script>
    
    </div>
</div>
 </div>
)};