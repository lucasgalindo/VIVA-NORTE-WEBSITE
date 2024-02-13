import { useRef, useState } from "react";
import "./ModalPhotos.css"


export default function ModalPhotos({ data, setModal }) {
    const [imageInScreen, setImageInScreen] = useState(0);
    const previous = useRef(null);
    const HandlePhoto = (index) => {
        previous.current = imageInScreen;
        setImageInScreen(index)
        console.log(imageInScreen)
    }
    const [imageClass, setImageClass] = useState("");

    

    const HandlerClass = () => {
        setImageClass("new-photo");
        setTimeout(()=>{
            setImageClass("");
        }, 500)
    }


    return (
        
        <div onClick={()=>setModal(false)} className="fullscreen-container mostDark">
            <div className="wrapper-caurosel-photos">
                <div className="carousel-photos" >
                    <img className={imageClass} src={data.pictures[imageInScreen].url} alt="" />
                </div>
                <div style={{
                    width: 0,
                    position: "relative"
                }}>
                    <div className="carousel-photos-below"
                        style={{
                            transition: previous.current <= imageInScreen ? ((imageInScreen - previous.current) * 0.1 + 0.2) + "s ease" : ((previous.current - imageInScreen) * 0.1 + 0.2) + "s ease",
                            left: -40 - (imageInScreen * 90)
                        }}
                    >
                        {data.pictures.map(({ url }, index) => {
                            return <img key={index} className={imageInScreen == index ? "selected-carousel-photo-below" : ""} onClick={(e) => {
                                e.stopPropagation();
                                HandlePhoto(index);
                                HandlerClass();
                            }} src={url} alt="" />
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}