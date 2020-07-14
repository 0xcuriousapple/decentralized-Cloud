
import React, { Component } from 'react';
import './ChatBox.css';
import { withWebRTC } from 'react-liowebrtc';
import { List, Typography, Divider } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
const { Title, Text } = Typography;

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMsg: '',
            p: 0,
            q: 0,
            n: 0,
            prn: 0,
            output1: 'Not Calculated',
            output2: 'Not Calculated',
        };
    }
    KeyGen(choice) {
        console.log("ad");
        let p1, p2, n;
        if (choice == 1) {
            p1 = this.state.p;
            p2 = this.state.q;
            n = this.state.prn;
        }
        else {
            p1 = this.state.p;
            p2 = this.state.q;
            n = this.state.n;
        }


        // Get a binary string, reverse it
        var bin = String((n).toString(2)).split("").reverse().join("");
        // Base for growth
        var grow = n;
        // Holds values for totals
        var tota = [];
        var total = 1;
        // The main loop
        for (var i = 0; i < bin.length; i++) {
            tota[i] = 1;
            if (bin.substring(i, i + 1) === "1") {
                for (var l = grow; l > 0; l--) {
                    tota[i] *= p1;
                    tota[i] %= p2;
                }
            }
            total *= tota[i];
            total %= p2;
            grow *= n;
        }

        if (choice == 1) {
            this.setState({ output1: total })
        }
        else {
            this.setState({ output2: total })
        }

    }

    generateChats = () => {
        if (this.chatBox) {
            setTimeout(() => { this.chatBox.scrollTop = this.chatBox.scrollHeight; }, 2);
        }
        return this.props.chatLog.map((item) => (
            <div className="chat" key={`chat-${item.name}-${item.timestamp}`}>
                <b className="name" style={{ color: item.alert ? '#888' : '#333' }}>{item.name}</b> <span className="msg">{item.message}</span>
            </div>
        ));
    }

    handleSend = (chatMsg) => {
        this.props.webrtc.shout('chat', chatMsg);
        this.props.onSend(chatMsg);

    }

    handleKeyUp = (evt) => {
        if (evt.keyCode === 13) {
            this.handleSend(this.state.inputMsg);
            this.setState({ inputMsg: '' });
        }
    }
    handleChange = e => {
        var name = e.target.name;
        this.setState({ [name]: e.target.value });
    }
    handleInputChange = (evt) => this.setState({ inputMsg: evt.target.value });

    render() {
        const { chatLog } = this.props;
        const data = [
            'Suppose you want to exchange key with Bob for file F. Headover to given p2p chat widget, or use any channel, security of channel does not matter.',
            <div>
                From mutual agreement choose two numbers <Text code>P</Text> and <Text code>Q</Text>, this numbers are not secret.
            <div className='inputIns'>
                    <Input placeholder="Enter P" name="p" onChange={this.handleChange} /> <Input placeholder="Enter Q" name="q" onChange={this.handleChange} /></div>
            </div>,
            <div>
                Now Choose any <Text code>Prime number</Text>, this is your secret.
                <span className='inputIns'>
                    <Input placeholder="Enter Prime number" className='inputIns' name="prn" onChange={this.handleChange} />
                </span>
            </div>,
            <div>
                We are going to calculate output of equation  P,Q and Prime no in <Text code>P<sup>Prime no</sup> mod Q</Text>.
                 <div>
                    <Button type="primary" className="insBut" onClick={() => { this.KeyGen(1) }}>Calculate</Button> <Text strong className='insOutput'>{this.state.output1}</Text>
                </div>
            </div>,
            'Exhange output of previous step with Bob',
            <div> Suppose You got output <Text code>N</Text> from Bob.
                <div className='inputIns'>
                    <Input placeholder="Enter N" className='inputIns' name="n" onChange={this.handleChange} />
                </div>
            </div>,
            <div>Now we are going to calculate the key for the file using'  <Text code>N<sup>Prime no</sup> mod Q</Text></div>,
            <div><Button type="primary" onClick={() => { this.KeyGen(2) }}>Calculate</Button> <Text strong className='insOutput'>{this.state.output2}</Text></div>,

            'You and Bob will genrate same key,Now headover to Your Files, upload file F with this newly generated key and share it with Bob.'

            // 'Choose p and q through chat : Equation p^x mod q',
            // 'Choose any prime number and plug it in equation as x, this is your private key dont tell it to anyone',
            // 'Pass down the output of step2 to Pooja ',
            // 'Once you got the Poojas output of step2, plug it in equation (Poojas Output)^x mod q',
            // 'Now you and Pooja will have same keys, confused ?',
        ];
        return (
            <div className='main'>
                <Row>
                    <Col span={10}>
                        <div className="containerchat">

                            <div className="chatHeader">
                                <h1 className="title">Key Exchange</h1>
                                <hr />
                            </div>
                            <div className="chatBox" ref={(div) => this.chatBox = div}>
                                {chatLog.length ? this.generateChats() : (
                                    <div className="info">
                                        <p>To test this component out, open this page in a new tab or send it to a friend.</p>
                                    </div>
                                )}
                            </div>
                            <hr />
                            <div className="bottomBar">
                                <input className="chatInput" type="text" placeholder="Type a message..." onKeyUp={this.handleKeyUp} onChange={this.handleInputChange} value={this.state.inputMsg} />
                            </div>

                        </div>
                    </Col>
                    <Col span={14}>
                        <div className='instructions'>
                            <Divider orientation="left"><Text className="deffi">Process of Deffi- Hellman Key exchange</Text></Divider>
                            <List
                                size="small"
                                footer={<Text className="expla"><a href="https://codereview.stackexchange.com/questions/113860/diffie-hellman-in-javascript/114135" className="Expla" > Details of how this algorithm works </a></Text>}
                                className="insList"
                                bordered
                                dataSource={data}
                                renderItem={item => <List.Item>{item}</List.Item>}
                            />

                        </div>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default withWebRTC(ChatBox);