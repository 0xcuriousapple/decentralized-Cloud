import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { Statistic, Row, Col, Button } from 'antd';
import "./App.css";
import { Typography, Space } from 'antd';

const { Text, Link } = Typography;
class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    // const { accounts, contract } = this.state;

    // // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });

    // // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    // // Update state with the result.
    // this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      // <div className="App">
      //   <h1>Good to Go!</h1>
      //   <p>Your Truffle Box is installed and ready.</p>
      //   <h2>Smart Contract Example</h2>
      //   <p>
      //     If your contracts compiled and migrated successfully, below will show
      //     a stored value of 5 (by default).
      //   </p>
      //   <p>
      //     Try changing the value stored on <strong>line 40</strong> of App.js.
      //   </p>
      //   <div>The stored value is: {this.state.storageValue}</div>
      // </div>
      <div className="wrapper">
        <div className="container">
          <header>
            <a href="javascript:;" className="logo">
              <img src="https://s10.postimg.org/40g9shqxx/logo.png" alt="" />
              <span>Decentralized Cloud</span>
            </a>
            <Text className="filesuploaded">Total Files uploaded</Text>
            <Text className="users">Total Users</Text>
            <div className="right">
              {/* <input type="text" placeholder="Search" /> */}

              <a href="javascript:;">Github</a>
              /
              <a href="javascript:;" className="active">Docs</a>
            </div>
          </header>
          <section>
            <aside>
              <img src="https://s13.postimg.org/t1fei6r83/profile_image.png" alt="" className="profile-image" />
              <h1 className="name">Milan Vuckovic</h1>
              <span className="description">Awesome Dude Overall</span>
              {/* <a href="http://milanvuckovic.net" className="link">
                milanvuckovic.net
              </a>
              <a href="javascript:;" className="follow">Follow</a> */}
              <Space direction="vertical" className="social">

                <Statistic title="Active Users" value={112893} className='li' />
                <Statistic title="Active Users" value={112893} className='li' />

              </Space>
              {/* <ul className="social">
                <li>
                  <span></span>
                  <span>
                    <Statistic title="Active Users" value={112893} />
                  </span>
                </li>
                <li>
                  <span>following</span>
                  <span>173</span>
                </li>
                <li>
                  <span>followers</span>
                  <span>494</span>
                </li>
                <li>
                  <span>posts</span>
                  <span>12</span>
                </li>
              </ul> */}
            </aside>
            <div className="content">
              <article>
                <a href="javascript:;">
                  <img src="https://s2.postimg.org/qcewpr52h/img1.png" alt="" className="thumbnail" />
                </a>
                <div className="post">
                  <div className="info">
                    <a href="javascript:;">
                      <div className="author">
                        <img src="https://s13.postimg.org/t1fei6r83/profile_image.png" alt="" />
                        <h5>Milan Vuckovic</h5>
                        <span className="time">2 hrs ago</span>
                      </div>
                    </a>
                    <div className="numbers">
                      <a href="javascript:;">
                        <img src="https://s13.postimg.org/lazw4xr2r/heart.png" alt="" />
                        365
                      </a>
                      <a href="javascript:;">
                        <img src="https://s17.postimg.org/5j9ozkk63/comments.png" alt="" />
                        18
                      </a>
                    </div>
                  </div>
                  <div className="post-about">
                    <a href="javascript();">
                      <h3>Why are you doing it?</h3>
                    </a>
                    <p>If you're working in the service type of industry, or at least have some ties to it, I'm sure you've  heard this one before. It has been asked consistenly and even though I always give ...</p>
                    <a href="javascript();" className="read-more">Read more</a>
                  </div>
                </div>
              </article>
              <article>
                <a href="javascript:;">
                  <img src="https://s10.postimg.org/52w0f29ih/img2.png" alt="" className="thumbnail" />
                </a>
                <div className="post">
                  <div className="info">
                    <a href="javascript:;">
                      <div className="author">
                        <img src="https://s13.postimg.org/t1fei6r83/profile_image.png" alt="" />
                        <h5>Milan Vuckovic</h5>
                        <span className="time">Oct 13</span>
                      </div>
                    </a>
                    <div className="numbers">
                      <a href="javascript:;">
                        <img src="https://s13.postimg.org/lazw4xr2r/heart.png" alt="" />
                        289
                      </a>
                      <a href="javascript:;">
                        <img src="https://s17.postimg.org/5j9ozkk63/comments.png" alt="" />
                        7
                      </a>
                    </div>
                  </div>
                  <div className="post-about">
                    <a href="javascript();">
                      <h3>The dudeism</h3>
                    </a>
                    <p>A while back I noticed this poster of Jeff Bridges in a restaurant nearby which had his face vectorized in almost pop art fashion. It always bothered me that ...</p>
                    <a href="javascript();" className="read-more">Read more</a>
                  </div>
                </div>
              </article>
              <article>
                <a href="javascript:;">
                  <img src="https://s30.postimg.org/pjjuihfkh/img3.png" alt="" className="thumbnail" />
                </a>
                <div className="post">
                  <div className="info">
                    <a href="javascript:;">
                      <div className="author">
                        <img src="https://s13.postimg.org/t1fei6r83/profile_image.png" alt="" />
                        <h5>Milan Vuckovic</h5>
                        <span className="time">Jul 25</span>
                      </div>
                    </a>
                    <div className="numbers">
                      <a href="javascript:;">
                        <img src="https://s13.postimg.org/lazw4xr2r/heart.png" alt="" />
                        112
                      </a>
                      <a href="javascript:;">
                        <img src="https://s17.postimg.org/5j9ozkk63/comments.png" alt="" />
                        101
                      </a>
                    </div>
                  </div>
                  <div className="post-about">
                    <a href="javascript();">
                      <h3>Make stuff that matters</h3>
                    </a>
                    <p>Since the beginning of time people had the need to express themselves and did it in numerous ways, but they also needed an order or set of guides to help them  ...</p>
                    <a href="javascript();" className="read-more">Read more</a>
                  </div>
                </div>
              </article>
              <article>
                <a href="javascript:;">
                  <img src="https://s15.postimg.org/5mnfljtbf/img4.png" alt="" className="thumbnail" />
                </a>
                <div className="post">
                  <div className="info">
                    <a href="javascript:;">
                      <div className="author">
                        <img src="https://s13.postimg.org/t1fei6r83/profile_image.png" alt="" />
                        <h5>Milan Vuckovic</h5>
                        <span className="time">May 17</span>
                      </div>
                    </a>
                    <div className="numbers">
                      <a href="javascript:;">
                        <img src="https://s13.postimg.org/lazw4xr2r/heart.png" alt="" />
                        436
                      </a>
                      <a href="javascript:;">
                        <img src="https://s17.postimg.org/5j9ozkk63/comments.png" alt="" />
                        64
                      </a>
                    </div>
                  </div>
                  <div className="post-about">
                    <a href="javascript();">
                      <h3>Up / Down</h3>
                    </a>
                    <p>If you're working in the service type of industry, or at least have some ties to it, I'm sure you've  heard this one before. It has been asked consistenly and even though I always give ...</p>
                    <a href="javascript();" className="read-more">Read more</a>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
