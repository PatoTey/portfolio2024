import { useRef, useEffect } from "react";

function useTitleChanger(title){
    useEffect(()=>{
        document.title = title
    },[title])
}

export default useTitleChanger