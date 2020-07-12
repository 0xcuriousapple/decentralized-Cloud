import React from 'react';
import { Button } from 'antd';
import { message } from 'antd';
import { Table, Tag, Space, Input } from 'antd';
import { Typography, List } from 'antd';
import { Modal } from 'antd';
const { Paragraph } = Typography;


const { Title, Text } = Typography;


const data = [
    {
        key: '1',
        FileName: 'Mike',
    },
];
class Track extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            infotabledata: [],
            tabledata: [],
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
            sharedadd: null,
        }
    }
    handleDownload = (record) => {
        console.log(record);
    }

    //Modal
    handleShare = (record) => {
        this.setState({ visible: true });
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
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

    render() {
        const columns = [
            {
                title: 'File Name',
                dataIndex: 'FileName',
                key: 'FileName',
            },
            {
                title: 'Actions',
                key: 'Actions',
                render: (text, record) => {
                    return <div >
                        <Button size="small" className="buttons" type="primary" onClick={() => this.handleDownload(record)}>Download</Button>
                        <Button size="small" className="buttons" type="primary" onClick={() => this.handleShare(record)}>Share</Button>
                    </div>
                }
            },

        ];

        return (
            <div>

                <div className="trackdata">
                    <div className="data-title">
                        {/* <Text strong>Tracking Details</Text> */}
                    </div>
                    <Table columns={columns} dataSource={data} />
                </div>
                <Modal
                    title="Share File"
                    visible={this.state.visible}
                    onOk={this.handleShare}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Input placeholder="Address" name='sharedadd' value={this.state.name} onChange={this.handleChange} /><br /><br />
                </Modal>
            </div >
        )
    }
}

export default Track;