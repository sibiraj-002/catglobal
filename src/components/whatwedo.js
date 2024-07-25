import React, { Component } from "react";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import thought from '../img/thought_leadership.png';
import Synergy from '../img/build_synergies.png';
import Action from '../img/catalyse_action.png';
import Green from '../img/GREEN-Foundation.png';
import Swasti from '../img/Swasti.png';
import Vrotti from '../img/Vrotti.png';
import CAC from '../img/CAC-logo-02.png';
import Upfront from '../img/Upfront.png';
import Aparna from '../img/aparna_sanjay.png';
import Catherine from '../img/cathrine_cove.png';
import Angela from '../img/angela.png';
import Sharma from '../img/sharma.png';
import Raghu from '../img/ragunathan.png';
import Shiv from '../img/shivkumar.png';

export default class WhatWeDo extends Component {

    state = {
        isOpen: false,
        isOpen1: false,
        isOpen2: false,
        isOpen3: false,
        isOpen4: false,
        isOpen5: false
    };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    openModal1 = () => this.setState({ isOpen1: true });
    closeModal1 = () => this.setState({ isOpen1: false });

    openModal2 = () => this.setState({ isOpen2: true });
    closeModal2 = () => this.setState({ isOpen2: false });

    openModal3 = () => this.setState({ isOpen3: true });
    closeModal3 = () => this.setState({ isOpen3: false });

    openModal4 = () => this.setState({ isOpen4: true });
    closeModal4 = () => this.setState({ isOpen4: false });

    openModal5 = () => this.setState({ isOpen5: true });
    closeModal5 = () => this.setState({ isOpen5: false });

    render () {
        return (
            <>
            <Container style={{paddingTop:'40px',paddingBottom:'60px'}} className="p-4">
                <h1 style={{textAlign:'center',paddingBottom:'40px'}} id="whatwedo">What We Do</h1>
                <p style={{textAlign:'center',marginBottom:'40px'}}>The common threads across all our work, be it on health, climate, livelihoods, or social protection, have been:</p>
                <Row>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <img src={thought} alt="Thought Leadership" style={{width:'100%', height:'auto'}} />
                    </Col>
                    <Col md={6}>
                        <div style={{display:'flex', alignItems:'center',height:'100%'}}>
                            <p><h3>Thought Leadership</h3>As thought leaders, we build knowledge and perspectives and generate learning. Our multi- and cross-disciplinary experience affords us the ability to draw, process, and share insights across themes and sectors, enriching solutions through diverse lenses.</p>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={6}>
                        <div style={{display:'flex', alignItems:'center',height:'100%'}}>
                            <p><h3>Build Synergies</h3>We understand that transformation and scale are not possible without partnerships and collaborations. We bridge the worlds of communities, practitioners, thinkers, and investors, and of programme and policy, bringing these together for scale and sustainability.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <img src={Synergy} alt="Thought Leadership" style={{width:'100%', height:'auto'}} />
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <img src={Action} alt="Thought Leadership" style={{width:'100%', height:'auto'}} />
                    </Col>
                    <Col md={6}>
                        <div style={{display:'flex', alignItems:'center',height:'100%'}}>
                            <p><h3>Catalyse Action</h3>Ethics, integrity, and execution excellence are the pathways towards action that demonstrate quality and dignity for communities. We provide mechanisms for partners in the social sector to remain firmly on these pathways.</p>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <div style={{marginTop:'60px'}}>
                            <p>ICF strives to bring this thought leadership and impact creation to the attention of our global stakeholders, be they foundations and other donors, governments, or diaspora populations.</p>
                            <p>Through our existing work and collaborations, ICF will impact the health and wealth of vulnerable communities globally.</p>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
            <Container fluid className="globeBg">
                <h1>Where we work</h1>
                <p>We work across the domains of livelihood, health, and Wellbeing for the Workforce with deep experience in policy, research, implementation, monitoring, capacity building, strategy, and documentation. We have been working across India and have a global footprint in 25 countries.</p>
                <Container>
                    <Row>
                        <Col><a href="https://greenfoundation.in" target="_blank" rel="noopener noreferrer"><img src={Green} alt="Green Foundation" /></a></Col>
                        <Col><a href="https://swasti.org" target="_blank" rel="noopener noreferrer"><img src={Swasti} alt="Swasti" /></a></Col>
                        <Col><a href="https://vruttiimpactcatalysts.org/" target="_blank" rel="noopener noreferrer"><img src={Vrotti} alt="Vrotti" /></a></Col>
                        <Col><a href="https://communityactioncollab.org/" target="_blank" rel="noopener noreferrer"><img src={CAC} alt="CAC" /></a></Col>
                        <Col><a href="https://upfront.global/" target="_blank" rel="noopener noreferrer"><img src={Upfront} alt="Upfront" /></a></Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="directorsBox">
                <h1>Board of Directors</h1>
                <Container>
                    <Row>
                        <Col md={4}>
                            <img src={Aparna} alt="Aparna Sanjay" />
                            <h2>Aparna Sanjay</h2>
                            <p>Aparna leads the US operations of the Catalyst Group of organisations and is responsible for partnerships and fundraising with key stakeholders.</p>
                            <Button variant="primary" onClick={this.openModal4}>Know more</Button>
                        </Col>
                        <Col md={4} >
                            <img src={Catherine} alt="Catherine Cove" />
                            <h2>Catherine Cove</h2>
                            <p>Catherine Cove is the Secretary of the Impact Catalyst Foundation. She is a healthcare consultant and second-year MBA candidate at the University of Chicago Booth School of Business.</p>
                            <Button variant="primary" onClick={this.openModal5}>Know more</Button>
                        </Col>
                        <Col md={4}>
                            <img src={Angela} alt="Angela Choudhuri" />
                            <h2>Angela Choudhuri</h2>
                            <p>Dr. Angela Chaudhuri is a public health leader with over 2 decades of experience leading and mentoring global programs that translate the science of public health into meaningful community action for equitable change.</p>
                            <Button variant="primary" onClick={this.openModal1}>Know more</Button>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={4}>
                            <img src={Sharma} alt="Sharma Karkal" />
                            <h2>Shama Karkal</h2>
                            <p>Shama is a social impact professional with 25+ years of experience; her core expertise has been working on community systems strengthening with a focus on marginalised communities.</p>
                            <Button variant="primary" onClick={this.openModal3}>Know more</Button>
                        </Col>
                        <Col md={4} >
                            <img src={Raghu} alt="Raghunathan N" />
                            <h2>Raghunathan N</h2>
                            <p>Co-founder of The Catalyst Group of Organisations, a strong proponent of building evidence and innovations to guide development. He has 7 Peer-reviewed/published papers to his name.</p>
                            <Button variant="primary" onClick={this.openModal2}>Know more</Button>
                        </Col>
                        <Col md={4}>
                            <img src={Shiv} alt="Shiv Kumar" />
                            <h2>Shiv Kumar</h2>
                            <p>Co-founder of The Catalyst group and Chief Integrator of the Community Action Collab, Shiv is a social investor who is passionate about solving complex social problems and improving the health & wealth of vulnerable communities.</p>
                            <Button variant="primary" onClick={this.openModal}>Know more</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Modal show={this.state.isOpen} onHide={this.closeModal} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Shiv Kumar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={Shiv} alt="Shiv Kumar" style={{display: 'block', marginBottom: '10px', width: '200px'}} />
                    Shiv (Co-founder of The Catalyst Group and Chief Integrator of Community Action Collab): Shiv is a dedicated social investor with 30 years of experience in social development, both in India and internationally. His expertise spans a spectrum of focus areas, including health, livelihoods, education, sustainability, gender, and equity. Shiv has founded several organizations within the Catalyst Group, contributing significantly to the social development landscape. He has also incubated and supported over 200 community organizations and special enterprises. Shiv actively participates in various standing committees, task forces, and reference groups, both in India and internationally. In addition to his professional endeavors, Shiv is a food enthusiast, technology enthusiast, and avid cyclist. He holds a PG Diploma in Rural Management from the Institute of Rural Management, a PG Diploma in Systems Development from the National Institute of Information Technology, and a Bachelor of Commerce from St. Joseph&apos;s College, Tamil Nadu. Shiv embodies the maxim, &apos;Act with urgency, be patient with outcomes&apos;.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={this.state.isOpen1} onHide={this.closeModal1} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Dr Angela Chaudhuri</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={Angela} alt="Angela Chowdhury" style={{display: 'block', marginBottom: '10px', width: '200px'}} />
                    Dr Angela Chaudhuri is a distinguished public health leader with over two decades of experience spearheading global programs that bridge the gap between public health science and impactful community initiatives for equitable change. Her advocacy for at-risk adolescents, gender nonbinary groups, and individuals with HIV and other conditions transcends continents, epitomizing her rallying cry of “Leave No One Behind.” Currently serving as Chief Catalyst at Swasti, a global public health non-profit, Angela is dedicated to adding 100 million healthy days to the lives of the poorest and marginalized by 2030. In 2021, during her leadership in the COVID response through the COVIDActionCollab (now CommunityActionCollab), she pioneered a multidisciplinary collaboration platform for environmental surveillance called Precision Health. Angela holds a Bachelor&apos;s Degree in Dental Sciences (Bangalore University), a Masters in Public Health (Boston University), and a PG Diploma in Journalism (London School). Having lived in five countries and worked in over 30 countries, including extensive work in India, Angela currently serves on the board of the Catalyst Foundation and Swasti. She also holds positions on two committees within the World Health Organization: the Social Participation Technical Network and as a Steering Committee member of WHO&apos;s first-ever civil society commission.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal1}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={this.state.isOpen2} onHide={this.closeModal2} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Raghunathan N</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={Raghu} alt="Raghunathan N" style={{display: 'block', marginBottom: '10px', width: '200px'}} />
                    Raghunathan (Co-founder, Catalyst Group of Organisations): Raghunathan is a dedicated advocate for evidence-based approaches in guiding development efforts. He excels at facilitating theories of change, building rigorous evidence through pluralistic methodologies, and establishing efficient monitoring, evaluation, and learning systems. With an impressive portfolio of work, including lead and advisory roles in monitoring and evaluation, Raghunathan is recognized for his contributions. He has published seven peer-reviewed papers and received the prestigious ‘Indian Council of Agricultural Research’ National award for his multi-disciplinary action research in agriculture and allied sciences. Raghunathan’s community engagement efforts directly impact small and marginal farmers, landless laborers, micro-small-medium entrepreneurs, women-owned businesses, women factory workers, artisanal fisherfolk, and over 500 community organizations and non-profit/social enterprises.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal2}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={this.state.isOpen3} onHide={this.closeModal3} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Shama Karkal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={Sharma} alt="Shama Karkal" style={{display: 'block', marginBottom: '10px', width: '200px'}} />
                    Shama Karkal(Partner, Swasti):
                    Shama is a seasoned social impact professional with 25+ years of experience. Her core expertise has been working on community systems strengthening with a focus on marginalized communities (women in sex work, LGBTQAI, urban and rural poor, factory workers), where people and their organizations work with a range of providers (health, justice, finances, etc.) to achieve well-being, individually and collectively.
                    She has been with Swasti and the Catalyst Group, a social enterprise platform, since 2006. She works with diverse collaboratives to solve wicked problems.
                    <ul>
                        <li>Chair, Steering Committee of the Asia Pacific Alliance on Sexual and Reproductive Health</li>
                        <li>Trustee, Catalyst Foundation</li>
                        <li>Board Member &mdash; Impact Catalysts Foundation Inc, USA</li>
                        <li>Core Team &mdash; Systems Innovation Bangalore Hub</li>
                        <li>Executive Group &mdash; Catalyst2030 India Chapter</li>
                        <li>Member, Future Talent Council</li>
                        <li>Advisory Council &mdash; Pay-What-It Takes India Initiative</li>
                        <li>Advisory Board &mdash; Community Design Agency</li>
                    </ul>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal3}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={this.state.isOpen4} onHide={this.closeModal4} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Aparna Sanjay</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={Aparna} alt="Aparna Sanjay" style={{display: 'block', marginBottom: '10px', width: '200px'}} />
                    Aparna Sanjay leads the US operations of the Catalyst Group of organizations. She oversees partnerships and fundraising efforts with key stakeholders. With two decades of expertise in business responsibility, philanthropy, social enterprise, and non-profit management, Aparna is deeply committed to fostering meaningful growth and scale. She possesses extensive experience in initiating projects from the ground up, grant-making, strategic stakeholder management, program development, and capacity building for social businesses and non-profits. Before joining ICF USA, Aparna worked as a consultant for small and medium-sized NGOs, assisting them in strategic planning, organizational sustainability, and board development initiatives. Previously, she served as the Executive Director at Social Venture Partners (India) and headed the Earthy Goods Foundation in New Delhi. She also led the CSR function for MphasiS, a prominent Indian technology company. Aparna is also an active member of the boards of HelpAge USA and World Pulse. Her educational background includes a Postgraduate Diploma in Management from the Indian Institute of Management, Bangalore, a Diploma in International Development from the London School of Economics and Political Science (LSE), and a Certificate in Strategic Non-profit Management from Harvard Business School.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal4}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={this.state.isOpen5} onHide={this.closeModal5} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Catherine Cove</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={Catherine} alt="Catherine Cove" style={{display: 'block', marginBottom: '10px', width: '200px'}} />
                    Catherine Cove serves as the Secretary of the Impact Catalyst Foundation. She is a healthcare consultant and a second-year MBA candidate at the University of Chicago Booth School of Business. With diverse experience in public health and healthcare spanning the United States, India, and the broader Asia-Pacific region, Catherine brings a wealth of knowledge to the board. She holds a BA in Biological Sciences from the University of Chicago and hails from the San Francisco Bay Area. Previously, Catherine worked as the Health Practice Manager and Technical Specialist at the Catalyst Group of Organisations in Bangalore, where she oversaw various projects in the realms of maternal and child health, sexual and reproductive health, COVID-19, economic development, tuberculosis, health financing, and worker wellbeing. Her roles encompass policy design, quantitative research, and monitoring and evaluation. Catherine also played a pivotal role in the development of India’s first universal health coverage scheme, Arogya Karnataka, and supported the implementation of Andhra Pradesh’s faecal sludge management strategy in select urban local bodies.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal5}>Close</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}