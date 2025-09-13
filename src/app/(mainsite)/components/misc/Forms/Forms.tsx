import styles from './hiringcontent.module.css';

export default function Forms(props: {id: string, title: string}){
return (
 <div className={styles.applyContent}>
<div className="center">
    <div className={styles.formWrapper}>
        
    <iframe
      id={`JotFormIFrame-${props.id}`}
      title={props.title}
     style={{width: "100%", minHeight: "100vh", overflowY: "scroll"}}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src={`https://form.jotform.com/${props.id}`}
      frameBorder="0"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-{props.id}']", "https://form.jotform.com/")</script>
    
    </div>
</div>
 </div>
)};