import Sresult from "./Sresult";

import { useState } from "react";

const Search = () => {
    const [img, setImg] = useState('')

    const eventListner = (event) => {
        const imageSet = event.target.value
        console.log(imageSet);
        setImg(imageSet)
    }
    return (
        <>
            <div className="search-input">
                <input type="text" placeholder="Search Any Image"
                    value={img}
                    onChange={eventListner} />
            </div>
            <Sresult />
        </>
    )
}
export default Search;