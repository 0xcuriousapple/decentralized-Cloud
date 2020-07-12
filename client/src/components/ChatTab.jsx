import React from 'react';
import { Button } from 'antd';
import { message } from 'antd';
import { Table, Tag, Space, Input } from 'antd';
import { Typography, List } from 'antd';
import { Modal } from 'antd';
import Dropzone from './Dropzone';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import ipfs from '../ipfs'
import CryptoJS from '../crypto-js'
import { Progress } from 'antd';
import ChatBox from './Chatbot';
import { LioWebRTC } from 'react-liowebrtc';
const { Paragraph } = Typography;
const { Title, Text } = Typography;


class chatTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            chatLog: [],
            options: {
                debug: true,
                dataOnly: true
            },
        }
    }
    addChat = (name, message, alert = false) => {
        this.setState({
            chatLog: this.state.chatLog.concat({
                name,
                message: `${message}`,
                timestamp: `${Date.now()}`,
                alert
            })
        });
    }

    join = (webrtc) => webrtc.joinRoom('my-p2p-app-demo');

    handleCreatedPeer = (webrtc, peer) => {
        this.addChat(`Peer-${peer.id.substring(0, 5)} joined the room!`, ' ', true);
    }

    handlePeerData = (webrtc, type, payload, peer) => {
        switch (type) {
            case 'chat':
                this.addChat(`Peer-${peer.id.substring(0, 5)}`, payload);
                break;
            default:
                return;
        };
    }
    render() {


        const { chatLog, options } = this.state;
        return (
            <div>
                <LioWebRTC
                    options={options}
                    onReady={this.join}
                    onCreatedPeer={this.handleCreatedPeer}
                    onReceivedPeerData={this.handlePeerData}
                >
                    <ChatBox
                        chatLog={chatLog}
                        onSend={(msg) => msg && this.addChat('Me', msg)}
                    />
                </LioWebRTC>
            </div >
        )
    }
}

export default chatTab;