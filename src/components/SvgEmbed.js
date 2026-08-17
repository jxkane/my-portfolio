function SvgEmbed({ src, title }) { 
    return ( <object data={src} type="image/svg+xml" className="w-full h-full rounded-lg" aria-label={title} > 
    Your browser does not support embedded SVGs. </object> ); } 
    
    
    export default SvgEmbed;