import React from "react"
import {Helmet} from 'react-helmet'
const MetaData = ({title})=>{
    return(
        <Helmet>
            <title>{`${title} - Tienda de Ropa`}</title>
        </Helmet>
    )
}
export default MetaData