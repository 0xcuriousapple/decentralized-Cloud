import React from 'react';
import { Drawer, Menu, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { UserOutlined, SoundOutlined, ForkOutlined, FileSearchOutlined, DollarOutlined, HomeOutlined } from '@ant-design/icons';
import Landing from './landing';
import YourFiles from './YourFiles'
import SharedFiles from './SharedFiles'
import { GithubOutlined } from '@ant-design/icons';
import './home.scss';
const { Header, Content } = Layout;

const AppMenuMapper = [
    { key: '0', value: 'Home', icon: <HomeOutlined /> },
    { key: '1', value: 'Your Files', icon: <SoundOutlined /> },
    { key: '2', value: 'Shared Files', icon: <ForkOutlined /> },

]

const LandingMenuMapper = [
    { key: '7', value: 'Docs', link: 'https://www.canva.com/design/DAEAXmeL4A8/Pi9R-fenNHZpV5ns7kStGA/view?utm_content=DAEAXmeL4A8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#1' },
    { key: '8', value: 'View on Github', link: 'https://github.com/abhishekvispute/paaradarshak-chainrunner' },
]
let labels = [

]

let mapAuthAddresstoName = {}
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            drawerVisible: false,
            selectedMenuItem: '0', selectedPage: <Landing />, contract: "",
            positionofpage: '',
        };
    }

    componentDidMount() {
        this.setState({ accounts: this.props.web3.accounts });
        window.ethereum.on('accountsChanged', (acc) => {
            this.setState({ accounts: acc })

            if (this.props.web3.contract != null) {
                this.call();
            }
        })
    }
    call() {

    };

    handleToggleDrawer = (bool) => {
        this.setState({ drawerVisible: bool });
    }
    handleChangeMenu = (key) => {
        this.handleToggleDrawer(false);
        this.setState({ selectedMenuItem: key });
        if (key == '0') this.setState({ positionofpage: '' });
    }
    openpage = () => {
        this.setState({ selectedMenuItem: '1', positionofpage: "Welcome", drawerVisible: false });
        console.log(this.props.web3);
        const w = this.props.web3.web3;
        // const instance = new w.eth.Contract(Paaradarshak.abi, owner);
        // this.props.web3.contract = instance;
        // this.setState({ contract: instance });
        // this.setState({ isRootAuth: false });
        // this.setState({ isMidAuth: false });
        // this.setState({ isNoAuth: false });
        // this.call();
    }

    render() {
        return (
            <Layout className="home">
                <Header className="header">
                    <MenuOutlined className="menu-unfold" type="default" onClick={() => this.handleToggleDrawer(true)} />
                    <div>{this.state.positionofpage != '' ? this.state.positionofpage : 'Decentralized cloud'}</div>
                    <Menu className="desktop-menu" theme="dark" mode="horizontal" selectedKeys={[this.state.selectedMenuItem]}>
                        {this.state.selectedMenuItem !== '0' ? AppMenuMapper.map((obj) => {
                            if (parseInt(obj.key) < 5 && parseInt(obj.key) != 1)
                                return <Menu.Item onClick={() => this.handleChangeMenu(obj.key)} key={obj.key}>{obj.value}</Menu.Item>
                            else if (parseInt(obj.key) == 1 && !this.state.isNoAuth)
                                return <Menu.Item onClick={() => this.handleChangeMenu(obj.key)} key={obj.key}>{obj.value}</Menu.Item>

                        }) :
                            LandingMenuMapper.map((obj) => {
                                return <Menu.Item key={obj.key}><a target='_blank' href={obj.link}>{obj.value}</a></Menu.Item>
                            })}
                    </Menu>
                </Header>
                <Drawer title="Welcome, User"
                    placement="left"
                    closable={true}
                    onClose={() => this.handleToggleDrawer(false)}
                    visible={this.state.drawerVisible}>
                    <Menu
                        style={{ width: 256 }}
                        selectedKeys={[this.state.selectedMenuItem]}
                        mode="inline"
                        theme="light">
                        {this.state.selectedMenuItem !== '0' ? AppMenuMapper.map((obj) => {
                            if (parseInt(obj.key) < 5)
                                return <Menu.Item onClick={() => this.handleChangeMenu(obj.key)} key={obj.key} icon={obj.icon}>
                                    {obj.value}
                                </Menu.Item>
                            else if (parseInt(obj.key) == 1 && !this.state.isNoAuth)
                                return <Menu.Item onClick={() => this.handleChangeMenu(obj.key)} key={obj.key}>{obj.value}</Menu.Item>

                        }) : LandingMenuMapper.map((obj) => {
                            return <Menu.Item key={obj.key}><a target='_blank' href={obj.link}>{obj.value}</a></Menu.Item>
                        })}
                    </Menu>
                </Drawer>
                {this.state.selectedMenuItem == '0' ? <Landing open={this.openpage} web3={this.props.web3} /> :
                    this.state.selectedMenuItem == '1' ? <YourFiles web3={this.props.web3} /> :
                        this.state.selectedMenuItem == '2' ? <SharedFiles web3={this.props.web3} /> :


                            <div></div>}
            </Layout>
        );
    }
}

export default Home;