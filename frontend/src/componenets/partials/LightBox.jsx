import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const LightBox = ({sources,children, className}) => {
    const [toggler, setToggler] = useState(false);
  return (
    <>
        <button className={className} onClick={() => setToggler(!toggler)}>
            {children}
        </button>
        <FsLightbox
        toggler={toggler}
        sources={[sources]}
        />
    </>
  )
}

export default LightBox