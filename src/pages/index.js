import React from 'react';
import Navbar from '../components/Navbar';
import { Banner } from '../components/Banner';
import { Infograph } from '../components/Infograph';
import { Organisationsec } from '../components/Organisation';
import { Constituents } from '../components/constituents';
import { Wwd } from '../components/Wwd';
import { Fpdetails } from '../components/fpdetails';
import { Contactus } from '../components/contactus';
import { Mainfooter } from '../components/mainfooter';
import Meta from '../components/meta';
import { Helmet } from 'react-helmet';

const Home = () => {

	const title = "Platform that promotes the health & wealth of the vulnerable";
	const desc ="A social enterprise and development platform, Catalyst Group works towards promoting health and wealth of vulnerable communities";
	const url ="https://catalysts.global/";
	//const banner ="https://catalysts.global/wp-content/uploads/2019/08/cg-facebook.jpg";
	const banner = 'http://localhost:3000/static/media/Green_foundation_logo.2f0c40f0.png';
	const keywords = 'social development,Social inequities,vulnerable population,enterprise social network';

	const schemaData = {
		"@context": "https://schema.org/",
		"@type": "WebSite",
		"name": "catalysts global",
		"url": "https://catalysts.global/",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://catalysts.global/{search_term_string}",
			"query-input": "required name=search_term_string"
		}
	};


	return (
		<>
		<Helmet>
			<link rel="canonical" href="https://catalysts.global/" />
			<meta name="google-site-verification" content="LysyG3zJq4ZnwfQvPHoHcXwGWE6KeUAc7f3e9aGBtW8" />
		</Helmet>
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
			__html: JSON.stringify(schemaData),
			}}
		/>
		<Meta title={title} desc={desc} url={url} banner={banner} keyword={keywords} />
		<div className="main-header">
			<Navbar />
		</div>
		<Banner />
		<Infograph />
		<Organisationsec />
		<Wwd />
		<Constituents />
		<Fpdetails />
		<Contactus />
		<Mainfooter />
		</>
	)
};

export default Home;