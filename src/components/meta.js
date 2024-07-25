import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const Meta = ({title, desc, url, banner,keyword}) => {
    const tagManagerArgs = {
        gtmId: 'GTM-WQKF5JH'
    }
    
    ReactGA.initialize("G-59KDHDLRD8");
    TagManager.initialize(tagManagerArgs);

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={desc} />
            <meta name="keyword" content={keyword} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc}/>
            <meta property="og:image" content={banner} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={desc} />
            <meta property="twitter:image" content={banner} />

            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={desc} />
            <meta property="twitter:image" content={banner} />
        </Helmet>
    )

}

export default Meta;