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
import { Divider } from 'antd';

const { Paragraph } = Typography;
const { Title, Text } = Typography;


const data = [
    {
        key: '1',
        FileName: 'Mike',
    },
];
class YourFiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabledata: [],
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
            visiblep: false,
            confirmLoadingp: false,
            visiblepd: false,
            confirmLoadingpd: false,
            sharedadd: null,
            password: null,
            acceptedFiles: null,
            record: null,
            percent: 0,
            feedback: "This Key will be used to encrypt your file, you can choose different keys for different files"
        }
    }

    handleDownloadButton = (record) => {
        this.setState({ visiblepd: true, record: record })
    }
    handleDownload = () => {
        let record = this.state.record;
        this.setState({ confirmLoadingpd: true })
        let password = this.state.password;
        ipfs.files.get(record.ipfsHash, function (err, files) {
            files.forEach(function callback(file) {
                console.log(file.path)
                console.log("File content >> ", file.content.toString('utf8'))
                var decrypted = CryptoJS.AES.decrypt(file.content.toString('utf8'), password);
                console.log(decrypted);
                let wordArray = decrypted;
                var arrayOfWords = wordArray.hasOwnProperty("words") ? wordArray.words : [];
                var length = wordArray.hasOwnProperty("sigBytes") ? wordArray.sigBytes : arrayOfWords.length * 4;
                var uInt8Array = new Uint8Array(length), index = 0, word, i;
                for (i = 0; i < length; i++) {
                    word = arrayOfWords[i];
                    uInt8Array[index++] = word >> 24;
                    uInt8Array[index++] = (word >> 16) & 0xff;
                    uInt8Array[index++] = (word >> 8) & 0xff;
                    uInt8Array[index++] = word & 0xff;
                }
                let typedArray = uInt8Array;
                console.log(typedArray);
                var downloadBlob = function (data, fileName, mimeType) {
                    var blob, url;
                    blob = new Blob([data], {
                        type: mimeType
                    });
                    url = window.URL.createObjectURL(blob);
                    downloadURL(url, fileName);
                    setTimeout(function () {
                        return window.URL.revokeObjectURL(url);
                    }, 1000);
                };
                var downloadURL = function (data, fileName) {
                    var a;
                    a = document.createElement('a');
                    a.href = data;
                    a.download = fileName;
                    document.body.appendChild(a);
                    a.style = 'display: none';
                    a.click();
                    a.remove();
                };
                downloadBlob(typedArray, `${record.FileName}`, `${record.Type}`);

            })
        })
        this.setState({
            visiblepd: false,
            confirmLoadingpd: false,

        });

    }
    componentDidMount = async () => {

        const { contract, accounts } = this.props.data;
        contract.methods.getMyFiles().call({ from: accounts[0], gas: 3000000 })
            .then((result) => {
                let i = 0;
                let t = [];
                for (i = 0; i < result.length; i++) {
                    t.push({
                        key: `${i}`,
                        FileName: result[i].name,
                        Type: result[i].mimetype,
                        ipfsHash: result[i].hash,
                    });
                }

                this.setState({ tabledata: t });
            })

    };
    call() {
        this.setState({
            tabledata: [],
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
            visiblep: false,
            confirmLoadingp: false,
            visiblepd: false,
            confirmLoadingpd: false,
            sharedadd: null,
            password: null,
            acceptedFiles: null,
            record: null,
            percent: 0,
            feedback: "This Key will be used to encrypt your file, you can choose different keys for different files."
        });
        const { contract, accounts } = this.props.data;
        contract.methods.getMyFiles().call({ from: accounts[0], gas: 3000000 })
            .then((result) => {
                let i = 0;
                let t = [];
                for (i = 0; i < result.length; i++) {
                    t.push({
                        key: `${i}`,
                        FileName: result[i].name,
                        Type: result[i].mimetype,
                        ipfsHash: result[i].hash,
                    });
                }

                this.setState({ tabledata: t });
            })
    }
    //Modal
    handleShareButton = (record) => {
        this.setState({ visible: true });
        this.setState({ record: record })
    }
    handleShare = () => {

        let record = this.state.record;
        this.setState({ confirmLoading: true });
        console.log(this.state.sharedadd);
        const { accounts, contract } = this.props.data;
        contract.methods.shareMyfile(this.state.sharedadd, record.ipfsHash, record.Type, record.FileName).send({ from: accounts[0], gas: 3000000 })
            .then((receipt) => {
                message.success('File Shared Sucessfully');
                console.log(receipt)

                this.setState({
                    visible: false,
                    confirmLoading: false,
                });
            })
            .catch((err) => {
                message.error('Sorry your payment was not successful Please try again');
                this.setState({ loading: false });
                this.setState({
                    visible: false,
                    confirmLoading: false,
                });
            })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    handleChange = e => {
        var name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    handleCancelp = () => {
        console.log('Clicked cancel button');
        this.setState({
            visiblep: false,
        });
    };
    handleCancelpd = () => {
        console.log('Clicked cancel button');
        this.setState({
            visiblepd: false,
        });
    };

    uploadPassword = (acceptedFiles) => {
        this.setState({ visiblep: true });
        this.setState({ acceptedFiles: acceptedFiles });
    }
    downloadenterPassword = () => {
        this.setState({ visiblep: true });
    }
    convertWordArrayToUint8Array(wordArray) {
        var arrayOfWords = wordArray.hasOwnProperty("words") ? wordArray.words : [];
        var length = wordArray.hasOwnProperty("sigBytes") ? wordArray.sigBytes : arrayOfWords.length * 4;
        var uInt8Array = new Uint8Array(length), index = 0, word, i;
        for (i = 0; i < length; i++) {
            word = arrayOfWords[i];
            uInt8Array[index++] = word >> 24;
            uInt8Array[index++] = (word >> 16) & 0xff;
            uInt8Array[index++] = (word >> 8) & 0xff;
            uInt8Array[index++] = word & 0xff;
        }
        return uInt8Array;
    }
    handleupload = () => {
        this.setState({
            confirmLoadingp: true,
        });
        // this.state.acceptedFiles.forEach((file) => {
        for (let i = 0; i < this.state.acceptedFiles.length; i++) {
            let file = this.state.acceptedFiles[i];
            this.setState({ feedback: "Reading file from client" });
            this.setState({ percent: 0 });
            this.setState({ percent: this.state.percent + 15 });
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                this.setState({ feedback: "Encrypting File" });
                this.setState({ percent: this.state.percent + 5 });
                // Do whatever you want with the file contents
                console.log(reader);
                const binaryStr = reader.result
                console.log(file.name);
                console.log(file.type);

                var wordArray = CryptoJS.lib.WordArray.create(reader.result);
                console.log(wordArray);
                console.log(this.state.password);
                var encrypted = CryptoJS.AES.encrypt(wordArray, this.state.password).toString();
                console.log(encrypted);
                console.log(Buffer(encrypted));
                let password = this.state.password;
                this.setState({ feedback: "Uploading File to IPFS" });
                this.setState({ percent: this.state.percent + 50 });
                ipfs.files.add(Buffer(encrypted), (err, result) => {
                    if (err) {
                        console.log(err);
                        return
                    }
                    else {
                        console.log(result[0].hash);
                        console.log(password);
                        const { accounts, contract } = this.props.data;
                        this.setState({ feedback: "Saving IPFS Hash on Smart Contract" });
                        this.setState({ percent: this.state.percent + 10 });
                        contract.methods.addMyfile(result[0].hash, file.type, file.name).send({ from: accounts[0], gas: 3000000 })
                            .then((receipt) => {
                                message.success('File Added Sucessfully');

                                this.setState({ feedback: "Done" });
                                this.setState({ percent: this.state.percent + 20 });
                                console.log(receipt)
                                if (i + 1 == this.state.acceptedFiles.length) {
                                    this.setState({
                                        visiblep: false,
                                        confirmLoadingp: false,

                                    });
                                    this.call();
                                }
                            })
                            .catch((err) => {
                                message.error('Sorry your payment was not successful Please try again');
                                this.setState({ loading: false });
                                this.setState({
                                    visiblep: false,
                                    confirmLoadingp: false,
                                });
                            })
                    }
                })
            }
            reader.readAsArrayBuffer(file)


        }




    }
    render() {
        const columns = [
            {
                title: 'File Name',
                dataIndex: 'FileName',
                key: 'FileName',
            },
            {
                title: 'Type',
                dataIndex: 'Type',
                key: 'Type',
            },
            {
                title: 'ipfsHash',
                dataIndex: 'ipfsHash',
                key: 'ipfsHash',
            },
            {
                title: 'Actions',
                key: 'Actions',
                render: (text, record) => {
                    return <div >
                        <Button size="small" className="buttons" type="primary" onClick={() => this.handleDownloadButton(record)}>Download</Button>
                        <Button size="small" className="buttons" type="primary" onClick={() => this.handleShareButton(record)}>Share</Button>
                    </div>
                }
            },

        ];

        return (
            <div>

                <div className="tabledata">
                    <Table columns={columns} dataSource={this.state.tabledata} />
                </div>

                <Modal
                    title="Share File"
                    visible={this.state.visible}
                    onOk={this.handleShare}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Input placeholder="Address" name='sharedadd' value={this.state.name} onChange={this.handleChange} /><br /><br />
                    <Divider orientation="left">Key Exchange</Divider>
                    <div className="keyInsWrapper">
                        <Text strong className="keyIns">The user at other end, will require key of this file to see its content.</Text>
                        <ul className="keyInsL">
                            <li>You can pass down the key, on yourself.</li>
                            <li>Or you can use our <Text code>Key exchange</Text> service, which uses Deffi- Hellman Key exchange for transfer of key.</li>
                        </ul>
                    </div>
                </Modal>


                <Modal
                    title="Enter Key"
                    visible={this.state.visiblep}
                    onOk={this.handleupload}
                    confirmLoading={this.state.confirmLoadingp}
                    onCancel={this.handleCancelp}
                >
                    <Input.Password
                        placeholder="key"
                        name='password'
                        onChange={this.handleChange}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    /><br /><br />

                    <Progress type="circle" percent={this.state.percent} width={50} className="feedback" /> &nbsp; &nbsp; &nbsp;<Text strong>{this.state.feedback}</Text>
                </Modal>


                <Modal
                    title="Enter Key"
                    visible={this.state.visiblepd}
                    onOk={this.handleDownload}
                    confirmLoading={this.state.confirmLoadingpd}
                    onCancel={this.handleCancelpd}
                >
                    <Input.Password
                        placeholder="key"
                        name='password'
                        onChange={this.handleChange}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    /><br /><br />
                </Modal>
                <Dropzone data={this.props.data} upload={this.uploadPassword} />
            </div >
        )
    }
}

export default YourFiles;