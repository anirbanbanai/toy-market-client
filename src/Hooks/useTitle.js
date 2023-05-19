// import { document } from "postcss";
// import Document from "postcss/lib/document";
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - My toy`;
    }, [title])
}

export {useTitle}