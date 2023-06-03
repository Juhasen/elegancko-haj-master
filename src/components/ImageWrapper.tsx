function ImageWrapper({src,height}) {
    return ( <>
            <img style={{height:`${height}px`}} src={src} alt="" />
    </> );
}

export default ImageWrapper;