
import React, { Component } from 'react';
import './ChatBox.css';
import { withWebRTC } from 'react-liowebrtc';
import { List, Typography, Divider } from 'antd';
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
const data = [
    'Suppose you are Abhi and you want to get in consensus with Pooja',
    'Choose p and q through chat : Equation p^x mod q',
    'Choose any prime number and plug it in equation as x, this is your private key dont tell it to anyone',
    'Pass down the output of step2 to Pooja ',
    'Once you got the Poojas output of step2, plug it in equation (Poojas Output)^x mod q',
    'Now you and Pooja will have same keys, confused ?',
];

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMsg: ''
        };
    }
    KeyGen(p1, p2, n) {
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
        return total;
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

    handleInputChange = (evt) => this.setState({ inputMsg: evt.target.value });

    render() {
        const { chatLog } = this.props;
        return (
            <div>
                <Row>
                    <Col span={9}>
                        <div className="containerchat">

                            <div className="chatHeader">
                                <h1 className="title">Key Consensus</h1>
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
                    <Col span={12}>
                        <div className='instructions'>
                            <Divider orientation="left">Deffihelman Key Exchange</Divider>
                            <List
                                size="small"
                                // header={<div>Header</div>}
                                // footer={<div>Footer</div>}
                                bordered
                                dataSource={data}
                                renderItem={item => <List.Item>{item}</List.Item>}
                            />
                            <a href="https://codereview.stackexchange.com/questions/113860/diffie-hellman-in-javascript/114135" className="Expla" > Explanation </a>
                        </div>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default withWebRTC(ChatBox);