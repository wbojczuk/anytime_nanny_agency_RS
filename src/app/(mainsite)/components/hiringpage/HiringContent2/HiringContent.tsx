import styles from './hiringcontent.module.css';

export default function HiringContent2(){
return (
 <div className={styles.applyContent}>
<div className="center">
    <div className={styles.formWrapper}>
        
    <iframe
      id="JotFormIFrame-252545949547169"
      title="Employment Application"
     style={{width: "100%", minHeight: "100vh", overflowY: "scroll"}}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src="https://form.jotform.com/252545949547169"
      frameBorder="0"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-252545949547169']", "https://form.jotform.com/")</script>
    
    </div>
</div>
 </div>
)};