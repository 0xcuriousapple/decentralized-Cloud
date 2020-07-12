import React from 'react';
import { Row, Col, Button, Modal, Card, Input } from 'antd';
import HeroImg from './hero.svg';
import Logo from './logo.png';
import { message } from 'antd';
import { Typography, Space } from 'antd';
import { Graph } from "react-d3-graph";
const { Text, Link } = Typography;
class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = { liveCampVisible: false, createCampVisible: false, liveCamp: [], name: '', desc: '', funds: [], mapNametoAddress: {}, checkifcampexists: {}, confirmLoading: false, ModalText: '' };
	}
	open() {
		this.props.open();
	}
	render() {
		return (
			/* Landing Hero Section */
			<div className="landing">
				<Row className="hero">
					<Col sm={24} md={12} className="hero-txt">
						<img src={Logo} style={{ height: '100px', width: 'auto' }} />
						<div className="hero-title">Decentralized cloud</div>
						<div className="hero-details">
							<div className="tagline">
								Store and Share files Securely
							</div>
						</div><br />

						<Button onClick={() => this.open()} size="large" type="primary">Get Started</Button>


					</Col>
					<Col style={{ textAlign: 'center' }} sm={24} md={12}>
						{' '}
						<img className="hero-img" src={HeroImg} />

					</Col>
				</Row>


			</div>
		);
	}
}

export default Landing;