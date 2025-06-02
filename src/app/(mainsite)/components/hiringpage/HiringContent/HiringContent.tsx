import styles from './hiringcontent.module.css';

export default function HiringContent(){
return (
 <div className={styles.applyContent}>
<div className="center">
    <div className={styles.formWrapper}>
         <iframe style={{width: "100%", minHeight: "100vh", overflowY: "scroll"}} id="JotFormIFrame-251526194582158" title="Nanny Client Application Form"  allow="geolocation; microphone; camera; fullscreen; payment" src="https://form.jotform.com/251526194582158" frameBorder="0"scrolling="yes" > </iframe> <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script> <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251526194582158']", "https://form.jotform.com/")</script> 
    </div>
</div>
 </div>
)};