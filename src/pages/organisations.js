import React from 'react';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import Contactus from '../components/contactus';
import Mainfooter from '../components/mainfooter';
import Meta from '../components/meta';
import { Helmet } from 'react-helmet';

const Organisation = () => {

	const title = 'Dedicated to enhancing the lives of the vulnerable';
	const desc = 'Learn more about the Catalyst Group of Organisations and how each brand is dedicated to the betterment of the society and in enhancing the lives of vulnerable communities.';
	const url = 'https://catalysts.global/organisation';
	const banner = 'http://localhost:3000/static/media/Green_foundation_logo.2f0c40f0.png';
	const keywords = 'social development,Social inequities,vulnerable population,enterprise social network';

	const orgSchema = {
		"@context": "https://schema.org/",
		"@type": "WebSite",
		"name": "catalysts global",
		"url": "https://catalysts.global/",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://catalysts.global/organisation{search_term_string}https://catalysts.global/organisation",
			"query-input": "required name=search_term_string"
		}
	};

	return (
		<>
		<Helmet>
			<link rel="canonical" href="https://catalysts.global/organisations" />
		</Helmet>
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
			__html: JSON.stringify(orgSchema),
			}}
		/>
		<Meta title={title} desc={desc} url={url} banner={banner} keyword={keywords} />
		<div className="main-header" style={{ backgroundColor: '#000' }}>
			<Navbar />
		</div>
		<div className='organisation-body'>
			<Container>
				<h3>Our Organisations</h3>
			</Container>
			
			<div className="organisation-single flex-row-wrap">
				<div className="organisation-logo-div w-101" style={{ backgroundColor: '#622F88' }}>
					<img src={require('../img/CMS-e1656309623502.png')} alt="CMS Logo" />
				</div>
				<div className="organisation-details-1 w-101">
					<h4>Catalyst Management Services</h4>
					<h5>(established in 1994)</h5>
					<p>A private limited organisation which specializes in providing consulting and professional services. CMS partners to create social impact, guaranteeing results through development solutions and investments. The organisation commits to sustainable development that leads to investments in ideas, individuals and institutions, creating shared value and maximizing social returns. CMS solutions range from Design (strategy and planning), Evidence (research, evaluation and insights), Monitoring (systems, accountability and performance), Learning systems (accretion and application).</p>
					<p>CMS bridges worlds by creating partnerships across a spectrum of development actors – communities and their institutions, program implementers/ practitioners, financiers, policy influencers, researchers, networks, coalitions and platforms</p>
					<p><a className="directions" href="https://solvists.org/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
				</div>
				<div className="organisation-featuredimage w-101">
					<img src={require('../img/cms-image.jpg')} alt="CMS" />
				</div>
			</div>
			<div className="organisation-single flex-row-wrap">
				<div className="organisation-featuredimage w-101">
					<img src={require('../img/impact_catalyst.png')} alt="CMS Logo" />
				</div>
				<div className="organisation-details-1 w-101">
					<h4>Impact Catalyst Foundation (ICF)</h4>
					<h5>(established in 1994)</h5>
					<p>is a US public charity that is part of the Catalyst Group of organisations, headquartered in India. The Catalyst Group was founded in 1994 and is a social enterprise platform focused on the promotion of the health and wealth of vulnerable communities. Our work has spanned over 25 countries across Asia and Africa in multiple domains, including health, livelihood, and climate change.</p>
					<p><a className="directions" href="/impact-catalyst-foundation-icf" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
				</div>
				<div className="organisation-featuredimage w-101">
					<img src={require('../img/build_synergies.png')} alt="CMS" />
				</div>
			</div>
			<div className="organisation-single flex-row-wrap">
				<div className="organisation-logo-div w-101" style={{ backgroundColor: '#E2005B' }}>
					<img src={require('../img/swasti-logo-1.png')} alt="Swasti Logo" style={{ width: '280px' }} />
				</div>
				<div className="organisation-details-1 w-101">
					<h4>Swasti</h4>
					<h5>(established in 2004)</h5>
					<p>A registered Society (not-for-profit), Swasti &ndash; The Health Catalyst &ndash; is a health resource centre.Which achieves public health outcomes for the marginalised, through the delivery of end-to-end solutions as well as short and long term support and facilitation, combining research and practice.</p>
					<p>Swasti &ndash; The Health Catalyst &ndash; was envisioned as an organisation to transform the lives of the marginalised communities by ensuring their access to quality healthcare. Swasti&apos;s work has fuelled impact by promoting healthcare access thereby contributing to poverty alleviation. Swasti have supported governments, donors and development partners to design solutions in public health. Swasti has directly reached over 400,000 people through our various initiatives.</p>
					<p><a className="directions" href="https://swasti.org/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
				</div>
				<div className="organisation-featuredimage w-101">
					<img src={require('../img/swasti-img.jpg')} alt="Swasti" />
				</div>
			</div>
			<div className="organisation-single flex-row-wrap">
				<div className="organisation-logo-div w-101" style={{ backgroundColor: '#004534' }}>
					<img src={require('../img/vrutti-logo-1-1.png')} alt="Swasti Logo" style={{ width: '280px' }} />
				</div>
				<div className="organisation-details-1 w-101">
					<h4>Vrutti</h4>
					<h5>(established in 2002)</h5>
					<p>A registered Society (not-for-profit), Vrutti is a Livelihood Impact Partner which enhances people&apos;s well-being through knowledge, innovation and transformative actions and brings about solutions at a scale that eliminate inequities and create wealth for the marginalised. Vrutti is committed to finding solutions to end poverty, marginalisation and creation of wealth and build resilience for small producers. As social organisation, Vrutti pursues problem solving with entrepreneurial zeal, business acumen, courage to innovate, and consistently challenge traditional practices. Vrutti is passionate about unbiased measurement, self-critique and learning. Vrutti works through result-based planning tools, performance measurement metrics, impact and value for money assessments and use technology as augmenter.</p>
					<p><a className="directions" href="https://vruttiimpactcatalysts.org/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
				</div>
				<div className="organisation-featuredimage w-101">
					<img src={require('../img/vrutti-img.jpg')} alt="Vrutti" />
				</div>
			</div>
			<div className="organisation-single flex-row-wrap">
				<div className="organisation-logo-div w-101" style={{ backgroundColor: '#FAFAFA' }}>
					<img src={require('../img/Fuzhioi-logo-1.png')} alt="Swasti Logo" style={{ width: '280px' }} />
				</div>
				<div className="organisation-details-1 w-101">
					<h4>Fuzhio</h4>
					<h5>(established in 2005)</h5>
					<p>Facilitating Market Access to Women and Smallholder Farmers and Marginalised Communities to Maximise Returns for their Products and Services. Fuzhio promotes Impact Products directly to customers on behalf of small farmers and vulnerable groups and allows them to maximize yields and provide customers with safe, responsible products.</p>
					<p><a className="directions" href="https://fuzhio.org/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
				</div>
				<div className="organisation-featuredimage w-101">
					<img src={require('../img/fuzhio-img.jpg')} alt="Fuzhio" />
				</div>
			</div>
			<div className="organisation-single flex-row-wrap">
				<div className="organisation-logo-div w-101" style={{ backgroundColor: 'rgb(250.250.250)' }}>
					<img src={require('../img/GREEN-FOUNDATION-LOGO.png')} alt="GREEN FOUNDATION Logo" style={{ width: '280px' }} />
				</div>
				<div className="organisation-details-1 w-101">
					<h4>Green Foundation</h4>
					<h5>(established in 1994)</h5>
					<p>GREEN Foundation works toward a well-preserved, diverse ecosystem that will sustain the rural livelihoods of the present generation without eroding the resource base of the future. Our work to empower the small-scale and marginal farmers of India first began in 1994 with a simple effort to distribute indigenous seed varieties in and around the village of Thalli, Tamil Nadu. This soon turned into a growing biodiversity conservation program that has been central to our work ever since.</p>
					<p><a className="directions" href="https://greenfoundation.in/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
				</div>
				<div className="organisation-featuredimage w-101">
					<img src={require('../img/Feature-Image-1.png')} alt="Fuzhio" />
				</div>
			</div>
			<div className="organisation-single flex-row-wrap">
				<div className="organisation-logo-div w-101" style={{ backgroundColor: '#000' }}>
					<img src={require('../img/logo-1.png')} alt="GREEN FOUNDATION Logo" style={{ width: '280px' }} />
				</div>
				<div className="organisation-details-1 w-101">
					<h4>Upfront</h4>
					<h5>(established in 2022)</h5>
					<p>Upfront works with front line workers and the “systems” by changing mindsets, behaviours and practices; improving skills, financial security, processes and services; building agency, ensuring voices and choices; and establishing partnerships and collaborations.</p>
					<p>Creating a positive impact on the workers&apos; ecosystem by leveraging a systems change approach while ensuring knowledge, skills (personal and professional), and services (health and wealth) through a platform approach that aggregates solutions and providers.</p>
					<p><a className="directions" href="https://upfront.global/" target="blank" rel="noopener noreferrer"> Visit Website </a></p>
				</div>
				<div className="organisation-featuredimage w-101">
					<img src={require('../img/Feature-Image.png')} alt="Fuzhio" />
				</div>
			</div>
		</div>
		<Contactus />
		<Mainfooter />
		</>
	);
};

export default Organisation;
