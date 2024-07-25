import React from 'react';
import Navbar from '../components/Navbar';
import Contactus from '../components/contactus';
import Footer from '../components/mainfooter';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Meta from '../components/meta';
import { Helmet } from 'react-helmet';

const Partners = () => {
	const title = 'Partners that share our vision and passion';
	const desc = 'Our partners, who share our vision and passion, play a huge role in supporting us in every possible way to ensure we enhance the lives of vulnerable communities.';
	const url = 'https://catalysts.global/partners';
	const banner = 'http://localhost:3000/static/media/Green_foundation_logo.2f0c40f0.png';
	const keywords = 'social development,Social inequities,vulnerable population,enterprise social network';

	const partnerSchema = {
		"@context": "https://schema.org/",
		"@type": "WebSite",
		"name": "catalysts global",
		"url": "https://catalysts.global/",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://catalysts.global/partners{search_term_string}https://catalysts.global/partners",
			"query-input": "required name=search_term_string"
		}
	};

	return (
		<>
		<Helmet>
			<link rel="canonical" href="https://catalysts.global/partners" />
		</Helmet>
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
			__html: JSON.stringify(partnerSchema),
			}}
		/>
		<Meta title={title} desc={desc} url={url} banner={banner} keyword={keywords} />
		<div className="main-header" style={{ backgroundColor: '#000' }}>
			<Navbar />
		</div>
		<div className='partner-body'>
			<Container>
				<div className='partner-title'>
					<h2>Partners</h2>
					<p>
					We work with organisations at the local, national, regional and global levels. Our partners play a huge part in supporting the work we do, helping us deliver to those who need it the most. Strategic alliances reinforce our work on impact programs across the breadth of themes we work on.
					</p>
				</div>
				<h3>Corporates</h3>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/agro-solutions.jpg')} alt='Agro Solutions' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/ajay-biotech.jpg')} alt='Ajay Biotech' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/Ananya-finance.png')} alt='Ananya Finance' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/big-basket.jpg')} alt='Big Basket' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/cotton-connect.jpg')} alt='Cotton Connect' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/waycool-1.jpg')} alt='WayCool' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/cream-line.jpg')} alt='Creamline' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/direct-subzi.jpg')} alt='Direct Subzi' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/farm-link.png')} alt='Farmlink' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/fino-payment-bank-500x500.jpeg')} alt='Fino Payment Bank' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/fwwb.png')} alt='FWWB' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/future-group.png')} alt='Future Group' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/fullerton.png')} alt='Fullerton' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/gap-inc.png')} alt='Gap Inc' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/godrej-agrovet.jpg')} alt='Farmlink' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/h_m.png')} alt='HM' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/hdfc.jpeg')} alt='HDFC' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/IDFC_First_Bank_logo.jpg')} alt='IDFC First Bank' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/jsw.jpeg')} alt='JSW' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/jumbotail.png')} alt='Jumbotail' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/kamatan.jpeg')} alt='Kamatan' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/Inditex.png')} alt='Inditex' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/iffdclogo.jpg')} alt='IFFDC' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/levi-strauss.png')} alt='Levi Strauss' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/larive.png')} alt='Larive' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/m_s.png')} alt='MS' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/mindtree.jpg')} alt='Mindtree' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/Samunnati.png')} alt='Samunnati' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/Sanghamithra.jpg')} alt='Sanghmithra' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/ncdex.jpg')} alt='NCDEX' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/neurosynaptic.jpg')} alt='Neurosynaptic' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/ninjacart.png')} alt='Ninjacart' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/origo.jpg')} alt='ORIGO' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/primark.jpg')} alt='Primark' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/vf.jpg')} alt='VF' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/walmart.jpg')} alt='WALMART' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/syndicate.png')} alt='Syndicate Bank' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/sistema.jpg')} alt='Sistema' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/lifung.jpg')} alt='Li Fung' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/zlabel.jpg')} alt='Zlabel' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/debenhams.jpg')} alt='Debenhams' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/bsrlogo.jpg')} alt='BSR' />
						</div>
					</Col>
				</Row>
				<h3 style={{ marginTop: 40 }}>Foundations</h3>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/arghyam.jpg')} alt='Arghyam' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/ashraya.jpg')} alt='Ashraya' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/azpi.jpg')} alt='Azim Premji' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/bill-and-melinda-gates-foundation.jpg')} alt='Bill &amp; Melinda Gates Foundation' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/c_a-foundation.png')} alt='CA Foundation' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/debenhams.jpg')} alt='Debenhams' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/EdelGiveLogo.jpg')} alt='Edel Give' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/ekstep.png')} alt='Ekstep' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/hivos.jpg')} alt='Hivos' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/Logopsd-2.png')} alt='HT Parekh' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/fordfoundation.jpg')} alt='Ford Foundation' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/KNH.jpg')} alt='KNH' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/oxfam.jpg')} alt='Oxfam' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/shriram.jpeg')} alt='Shriram' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/SVP.jpg')} alt='SVP' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/trust-law.jpg')} alt='Trust Law' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/ubs.png')} alt='UBS' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/UNfoundations.jpg')} alt='UN Foundations' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/kki.jpg')} alt='KKI' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/aidsfonds.jpg')} alt='AidsFonds' />
						</div>
					</Col>
				</Row>
				<h3 style={{ marginTop: 40 }}>Developments banks</h3>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/nabard.jpg')} alt='NABARD' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/nabkisan.jpg')} alt='Nab Kisan' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/nabfins.jpg')} alt='Nab Fins' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/sidbi.png')} alt='SIDBI' />
						</div>
					</Col>
				</Row>
				<h3 style={{ marginTop: 40 }}>Social Purpose Organisations / Impact Organisation</h3>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/apmas.png')} alt='APMAS' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/association-of-people-with-diability.jpg')} alt='Association of people with disability' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/bar-council-of-india.png')} alt='BAR Council of India' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/Solidaridad.jpg')} alt='Solidaridad' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/dsc.jpg')} alt='DSC' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/gwa.jpg')} alt='GWA' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/yfa.jpg')} alt='YFA' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/breakthrough.png')} alt='Breakthrough' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/ciks.png')} alt='CIKS' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/development-alternatives.png')} alt='Development Alternatives' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/good-shepherd.png')} alt='Good Shepherd' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/gram-vikas-trust.jpg')} alt='Gram Vikas Trust' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/igs.png')} alt='IGS' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/iihs.png')} alt='IIHS' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/ifhd.jpeg')} alt='IFHD' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/csa.jpg')} alt='CSA' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/industree.png')} alt='Industree' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/3ie.jpg')} alt='3IE' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/itm.png')} alt='ITM' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/pratham.jpeg')} alt='Pratham' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/phfi.png')} alt='PHFI' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/rapl.png')} alt='RAPL' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/rcpds.jpg')} alt='RCPDS' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/rose-malar.jpg')} alt='Rose Malar' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/serp.png')} alt='SERP' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/sheperd.jpg')} alt='Sheperd Collective' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/stc.png')} alt='Save The Children' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/SVYM.png')} alt='SVYM' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/speech.jpg')} alt='Speech' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/swatijyoti.jpg')} alt='Swati Jyoti' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/wateraid.png')} alt='Wateraid' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/wassan.png')} alt='Wassan' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/basix.jpg')} alt='Basix' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/sevamb.jpg')} alt='Sevamb' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/bwda-logo-1.png')} alt='BWDA' />
						</div>
					</Col>
				</Row>
				<h3 style={{ marginTop: 40 }}>Universities</h3>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/isdm.jpg')} alt='ISDM' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/xlri.jpg')} alt='XLRI' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/Ximb.jpg')} alt='XIMB' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/uni-chicago.jpg')} alt='UNI Chicago' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/univ-greenwich.jpg')} alt='University of Greenwich' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/oregon.jpg')} alt='Oregon' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/sussex-1.jpg')} alt='University of Sussex' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/tufts-1.jpg')} alt='Tufts University' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/boston-university-1.png')} alt='Boston University' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/irma.jpg')} alt='IRMA' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/univ-greenwich-1.jpg')} alt='University of Greenwich' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/azp.jpg')} alt='Azim Premji Initiatives' />
						</div>
					</Col>
				</Row>
				<h3 style={{ marginTop: 40 }}>
					Networks
				</h3>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/bsrlogo.jpg')} alt='BSR' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/confederation-of-indian-industry.jpg')} alt='Confederation of Indian Industry' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/gain.jpg')} alt='GAIN' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/idh.png')} alt='IDH' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/rra.png')} alt='RRA' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/rtrs.jpg')} alt='RTRS' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/logo-apa.jpg')} alt='APA' />
						</div>
					</Col>
				</Row>
				<h3 style={{ marginTop: 40 }}>Bilaterals</h3>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/department-for-international-development.jpeg')} alt='Department for International Development' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/usaid.png')} alt='USAID' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/swiss-agency.jpg')} alt='Swiss Agency' />
						</div>
					</Col>
				</Row>
				<h3 style={{ marginTop: 40 }}>Multi Laterals</h3>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/IFAD.jpg')} alt='IFAD' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/FAO.jpg')} alt='FAO' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/IFC.jpg')} alt='IFC' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/UNAIDS.jpg')} alt='UNAIDS' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/undp.png')} alt='UNDP' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/unicef.jpg')} alt='UNICEF' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/unodc.jpg')} alt='UNODC' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/worldbank_logo.jpg')} alt='The World Bank' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/EU.jpg')} alt='The European Union' />
						</div>
					</Col>
				</Row>
				<h3 style={{ marginTop: 40 }}>Government Agencies</h3>
				<Row>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/NDLEA.gif')} alt='NDLEA' />
						</div>
					</Col>
					<Col md={2}>
						<div className='partner-imagediv'>
							<img src={require('../img/sfac.jpeg')} alt='SFAC' />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
		<Contactus />
		<Footer />
		</>
		
	)
};

export default Partners;