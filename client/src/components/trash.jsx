var NewComponent = React.createClass({
    render: function () {
        return (
            <div>
                <div className="banner" />
                <div className="top-support" />
                <div className="top-version">Latest Version: 0.8.18.6</div>
                <a className="anchor" name="home" />
                <nav>
                    <div className="nav-wrapper">
                        <ul className="nav-ul">
                            <li><a href="#download">DOWNLOAD</a></li>
                            <li><a href="#learn">ABOUT</a>
                            </li>
                            <li><a href="#home" className="noborder-hover"><img src="https://morph.is/v0.8/images/morphis_logo1.png" alt="" className="fade" /></a></li>
                            <li><a href="#tech">TECH</a></li>
                            <li><a href="#download">SOURCE</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                            <li className="icon">
                                <a href="javascript:void(0);" onclick="myFunction()">☰</a>
                            </li></ul>
                    </div>
                </nav>
                <section id="intro">
                    <div className="container">
                        <div className="intro-section">
                            <img src="https://morph.is/v0.8/images/morphis_is.png" className="morphis-is-space" /><br />
                            <img src="https://morph.is/v0.8/images/one2.gif" className="one-world-space" />
                            <span className="intro"><p>Free open source peer-to-peer<br />
                    high-performance <b>distributed</b> datastore.</p>
                                <p><b>The world's global filesystem.</b></p></span>
                            <span className="button-space"><a className="fadebutton" href="#download">DOWNLOAD</a></span>
                            <span className="button-space"><a className="fadebutton" href="#learn">LEARN MORE</a></span>
                        </div>
                    </div></section>
                <section id="about">
                    <a className="anchor" name="learn" />
                    <div className="column70">
                        <h1>THE FUTURE IS<br />SPACE WE CREATE</h1>
                        <p>
                            At this point of its early stages, MORPHiS is a global encrypted distributed datastore intended to replace the cloud for storage and far more. This first release also includes DMAIL (distributed mail), inherently spam resistant, inherently encrypted, uncensorable, free distributed messaging.</p>
                        <p>MORPHiS is simple to run, accessible to everyone: Download, double click, and your web browser now opens a window viewing the root MORPHiS UI page where you can already browse and upload to the next generation of the Internet - MORPHiS.
              </p><p>
                            Through the power of distributed technology MORPHiS is software run by each of us to create an independent network that requires no centralized servers or control. Upload files to the network via the web browser, SSH client, or use "mcc", the command line MORPHiS UI.</p>
                        <p />
                        <p>MORPHiS is also a start to the foundational layer for <a href="https://sherlock.ischool.berkeley.edu/wells/world_brain.html">The World Brain</a>, the idea of a unified human consciousness. It is a project that aims at a future of truly free and open dialogue, knowledge and ideas, not only on the web, but in our everyday lives. </p>
                        <p>If MORPHiS is successful, I believe it has the potential to connect us all on a trust based system via the next generation of the internet; deprecating necessary evil, making mass government surveillance impossible, and not to mention, the future possibility of <a href="https://sherlock.ischool.berkeley.edu/wells/world_brain.html">dissolving human conflict into unity</a>.  Until then, it deprecates: email, bittorrent, youtube, the internet, etc.</p>
                        <p />
                        <p>I am doing this all for free for all humanity because I hate evil. My #1 guiding moral principal is that I am morally opposed to slavery in every form, including the covert economic slavery powered by lies that is used today in all nations that claim they do not allow slavery. I do not believe in 'neccessary evil'. Infact, I know that there is no neccessary evil, such is only shortcuts which lead to destruction.</p>
                        <p>Nothing will stop me from completing my life's work, my purpose in life. This is my calling. I am and for years already been working on this full time; and I will continue to do so until it is finished.</p>
                        <p>Most important is that this project isn't about one person, or even a few. It's about all of us, working together to create the world we want to live in, free from corruption, slavery, evil and manipulation; a vision many have thought impossible, until now.</p>
                        <p>Join Me!<br /> Together we will peacefully overthrow the existing system, world-wide!</p>
                        <p>Sam</p>
                    </div>
                </section>
                <section id="middle">
                    <a className="anchor" name="why-morphis" />
                    <h2>WHY MORPHiS?</h2>
                    <div className="three-column">
                        <div className="column-left">
                            <span className="left-border">
                                <div className="col-text"><h3>OPEN SOURCE</h3><p>Written in Python and 100% open source, MORPHiS is intended to be free to open collaboration, transparency, and rapid prototyping. Lets work together to get this project off the ground!</p>
                                </div>
                            </span><br /><br />
                            <span className="left-border">
                                <div className="col-text"><h3>MODULAR</h3><p>The network is optimized for performance and low latency to allow for applications to be built on top of it using MORPHiS as its database.</p>
                                    <p>It also uses TCP to be 100% compatible with TOR so that it is as anonymous as TOR for those who connect their node through TOR to the MORPHiS network.</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="column-center">
                        <span className="left-border">
                            <div className="col-text">
                                <h3>SECURE</h3>
                                <p>MORPHiS is a custom (enhanced with inventions) Kademlia DHT over a custom (enhanced with optimizations for performance in security) SSH protocol. MORPHiS is written in Python, a free and open language that is memory safe with high performance asynchronous I/O, and is not controlled by US/NSA corporations.</p>
                            </div></span><br /><br />
                        <span className="left-border">
                            <div className="col-text">
                                <h3>DISTRIBUTED</h3>
                                <p>Because the nodes are distributed on each of our computers, the MORPHiS network is completely decentralized. It is reliable, transparent, scalable, and is high performance without any centralized power having control.</p>
                            </div></span>
                    </div>
                    <div className="column-right">
                        <span className="left-border">
                            <div className="col-text">
                                <h3>WEB OF TRUST</h3>
                                <p>Through a trust based system of reputation, this feature will enable reputation based searches (deprecating GOOGLE/BING/ETC, DNS, and so on), forums (bye bye disqus, etc!), and eventually deprecating democracy and stone age government (democracy via stone age paper ballots VS real time direct voting).</p>
                            </div></span><br />
                        <span className="left-border">
                            <div className="col-text">
                                <h3>BITCOIN INCENTIVE</h3>
                                <p>This layer will allow for Bitcoin Micro-transactions and an inherent automatic Bitcoin Mixing Layer (anonymize bitcoin and add infinite micro-transaction ability).</p>
                            </div></span>
                    </div>
                </section>
                <section id="faq">
                    <div className="section-faq">
                        <a className="anchor" name="faq" />
                        <div className="column70"><h2>FAQ</h2>
                            <span className="left-border">
                                <div className="col-text">
                                    <h3>How do I download MORPHiS?</h3>
                                    <p>Just double click, and your web browser now opens a window viewing the root MORPHiS UI page where you can already browse and upload</p>
                                </div></span><br /><br />
                            <span className="left-border">
                                <div className="col-text">
                                    <h3>How do I install MORPHiS?</h3>
                                    <p>Just unzip the archive wherever you want, it runs self contained.</p>
                                </div></span><br /><br />
                            <span className="left-border">
                                <div className="col-text">
                                    <h3>What is DMAIL?</h3>
                                    <p>THE KILLER FEATURE! My pride and joy invention: Distributed Spam Proof Mail! Uncensorable, inherently spam proof and transparently encrypted and sender authenticated messaging! Secure enough for Edward Snowden! Easy and fool-proof enough for a child! This uses the updateable key feature above plus the prefix key search to enable it. It is a revolutionary invention found only in MORPHiS! The inherent spam resistance uses a transparent proof of work, beyond what hashcash was. It is automatically AES-256-CBC encrypted and automatically RSA-4096 sender authenticated. Use it over TOR and it is inherently anonymous as well! Oh yea, and MORPHiS hosts your Dmail for free! This completely deprecates Email!</p>
                                </div></span><br /><br />
                        </div>
                    </div>
                </section>
                <section id="tech">
                    <div className="column70">
                        <h2>TECH</h2>
                        <p>Dmail/Dpush White Paper: <a href="https://morph.is/v0.8/dpush-whitepaper.odt">https://morph.is/v0.8/dpush-whitepaper.odt</a></p>
                        <p>Cross platform (Officially supported: Linux, Windows, OSX; should work on BSDs, etc, eventually anything can be officially supported.)</p>
                        <p>OPEN SOURCE (GNU GPL v2)</p>
                        <p>This is my life's work. I have been designing it, full-time, for years. I have been coding full-time since December of 2014. I am a very good programmer (at least with distributed systems, networks, databases, security, cryptography, and some other areas). This is my purpose in life. I have found my calling! I have a vision, and I am seeing it through until the end. That end is the World Brain peacefully overthrowing the existing system, world-wide.</p>
                        <p>What I released this month is a globally decentralized uncensorable encrypted attack resilient distributed datastore to replace the cloud for storage -- and far more. It is advanced enough already that it has the following features:</p>
                        <p>MORPHiS is a custom (enhanced with inventions) Kademlia DHT over a custom (enhanced with optimizations for performance) SSH protocol (you can SSH into your node as one of the interfaces to it!). It uses TCP to be 100% compatible with TOR so that it is as anonymous as TOR for those who connect their node through TOR to the MORPHiS network. Its design also enables it to not care much about firewalls. Dead simple to run: Download, double click, and then your webbrowser automatically opens a new window viewing the root Morphis UI and you can already browse and upload to the next generation of the Internet - MORPHiS! There are 3 UIs: The most developed and supported is via your web browser, the next is via SSH client, and finally via the 'mcc' the command line morphis UI. You can upload and download with curl and wget as well! Fully scriptable already!</p>
                        <p>MORPHiS is purposely designed and architected from the beginning to work 100% over TOR (although the necessary SOCKS support is not there yet, but will be before 1.0). Eventually it will have a native anonymizing layer to replace TOR, because there are some serious flaws in TOR for a long time now (including who funds it :).</p><br />
                        <h6>FEATURES</h6>
                        <p /><h6>Static keys</h6>
              Upload/download data, id/key is deterministic based upon the data and is a pointer to the data, similar to Bittorrent. Any p2p file share is ALREADY DEPRECATED by this feature. Multipart and everything. Search is coming!<p />
                        <p /><h6>Updateable keys</h6>
              Upload/download signed changeable (by author) via a key which stays the same. This deprecates blogs, web hosting, Etc.<p />
                        <p /><h6>Prefix Key Search</h6>
              This feature is unique to MORPHiS. I have not seen it in any other system that is out there in this space. This feature allows you to only have to type the very beginning of any key/url. The network will find the full key as quickly and scaleably as a full key. <i>Maalstroom</i> will redirect you to the full key and then thus download the data you were requesting. The only thing to keep in mind is that the less characters you type the less work it is for someone to brute force data to be closer to the prefix you type than the actual data you were intending to get to. A rough calculation shows that 32 characters is as ridiculously secure as a bitcoin address. Typing the full 512 bits (102 to 103 characters) is beyond so ridiculously secure that no human should do so :) When you upload pages containing links, it is best to use the full link as that saves the key fetch operation as well as makes the page future proof, and since the user just clicks the link there is no downside to the full link being used. This feature was invented for two purposes: to make it really easy to use MORPHiS urls even before a search is created; and perhaps more importantly, it is the magic enabling feature that makes Dmail and all that will be built on Dmail (Forums) possible!<p />
                        <p /><h6>Dmail</h6>
              THE KILLER FEATURE! My pride and joy invention: Distributed Spam Proof Mail! Uncensorable, inherently spam proof and transparently encrypted and sender authenticated messaging! Secure enough for Edward Snowden! Easy and fool-proof enough for a child! This uses the updateable key feature above plus the prefix key search to enable it. It is a revolutionary invention found only in MORPHiS! The inherent spam resistance uses a transparent proof of work, beyond what hashcash was. It is automatically AES-256-CBC encrypted and automatically RSA-4096 sender authenticated. Use it over TOR and it is inherently anonymous as well! Oh yea, and MORPHiS hosts your Dmail for free! This completely deprecates Email!<p />
                        <p>The network, being modular in design, is architected to be optimized for high performance and low latency in order to allow for applications to be built on top of it using MORPHiS as their database instead of the previous stone age way of using MySql, Postgresql, Oracle, MongoDB, Redis, Etc. This is what I will be doing once everyone is happy with this layer (Morphis). I will be coding the next layers, and then ultimately the final layer, which is the <a href="https://sherlock.ischool.berkeley.edu/wells/world_brain.html" target="blank">World Brain!</a> (He is not talking about centralized wikipedia; he is absolutely talking about a unified human consciousness deprecating governments.)</p><br />
                        <h6>NEXT STEPS IN MY PLANNED OUT VISION:</h6>
                        <b>STREAM 1</b>
                        <p>Dmail (Dpush/TargetedBlock) Technology (COMPLETE)</p>
                        <ul className="underline">
                            <li>Web Page Comment deprecation layer (Deprecate Disqus!).</li>
                            <li>Forum layer (Deprecate all forum software, also IRC).</li>
                            <li>Rudimentary Search!</li>
                        </ul>
                        <p>(This STREAM will implement things that would be better with WOT but are already possible to be better than the current WWW solutions just by using Dmail/Dpush Technology).</p><br />
                        <b>STREAM 2</b>
                        <p>Bitcoin Microtransaction and Mixing Layer (Add infinite cheap microtransactions to Bitcoin and anonymize it as well)!
              </p><ul className="underline">
                            <li>Incentivization layer</li>
                            <ul>
                                <li>TOR replacement layer (traditional anonymous proxy deprecation layer)</li>
                                <li>Distributed computation layer (ie, Alternative design to achieve what Ethereum hopes to do.)</li>
                            </ul>
                        </ul><p /><br />
                        <b>STREAM 3</b>
                        <p>Trust layer (Web Of Trust)
              </p><ul className="underline">
                            <li>Search (deprecating GOOGLE/BING/ETC, DNS, and so on).</li>
                            <li>WOT enhanced Forum layer.</li>
                            <ul>
                                <li>Democracy deprecation layer.</li>
                                <ul>
                                    <li>CEO, manager, BOSS deprecation layer.</li>
                                    <li>Stone age Government (democracy via stone age paper ballots VS real time direct voting) deprecation layer.</li>
                                    <li><a href="https://sherlock.ischool.berkeley.edu/wells/world_brain.html">The World Brain.</a></li>
                                    <ul>
                                        <li><a href="https://sherlock.ischool.berkeley.edu/wells/world_brain.html">World Peace.</a></li>
                                    </ul>
                                </ul>
                            </ul>
                        </ul><p /><br />
                        <b>STREAM 4</b>
                        <p>Things that are already easily possible with current MORPHiS and are just application coding that anyone could do.
              </p><ul className="underline">
                            <li>Deprecate Dropbox by implementing native rsync/sftp support. Think sshfs!</li>
                            <li>Deprecate ... (your ideas here! your help WANTED!)</li>
                        </ul><p /><br />
              Each tabbed line is dependent upon the less indented line immediately above it. All STREAMs will be and are able to be worked on concurrently. I will prioritize myself based upon feedback and requests. I would love for developers to join this project, and together we will seriously save the world! I'm not going anywhere, ever! This is my life until success or death; and I am young!<p /> JOIN ME!
            </div>
                </section>
                <section id="download">
                    <div className="section-download" id="bottom">
                        <a className="anchor" name="download" />
                        <div className="d-column-left">
                            <h5><img src="https://morph.is/v0.8/images/download_cloud.png" /><br /><br />
                  DOWNLOAD</h5>
                            <p>Fully supported on:</p>
                            <img src="https://morph.is/v0.8/images/support_lg.png" /><br />
                            <a className="fadebutton" href="morphis-0.8.tar.xz">LINUX</a>&nbsp;&nbsp;<a className="fadebutton" href="morphis-0.8-x64.tar.xz">LINUX x64</a><br />
                            <a className="fadebutton" href="morphis-0.8-win64.zip">WINDOWS x64</a><br />
                            <a className="fadebutton" href="http://morph.is/maalstroom.xpi">FIREFOX PLUGIN (optional)</a>
                            <h5><a className="fade" href="http://162.252.242.77:8000/morphis.git"><img src="images/src_cloud.png" /></a><br /><br />
                                <a href="http://162.252.242.77:8000/morphis.git" target="blank">SOURCE</a></h5>
                            <p className="underline">Download the MORPHiS source with open source GNU GPL v2 license<br /><br />
                                <a href="http://redmine.morph.is/redmine/projects/morphis/repository" target="blank">Redmine Public Repository View</a><br />
                                <b>git clone gitpub@162.252.242.77:morphis.git</b></p>
                            <p className="small-text">
                                (&nbsp;ECDSA: 15:c6:aa:a1:df:1e:f2:8a:97:35:8a:9c:42:bd:ef:23&nbsp;)<br />
                  (&nbsp;RSA:   80:b9:fe:c8:ce:f4:4f:9d:83:9b:a8:a6:0d:de:e6:d2&nbsp;)<br />
                  (&nbsp;http:  git url: <a href="http://162.252.242.77:8000/morphis.git" target="blank">http://162.252.242.77:8000/morphis.git</a>&nbsp;)
                </p>
                        </div>
                        <div className="d-column-right">
                            <h5><img src="https://morph.is/v0.8/images/btc_heart.png" /><br /><br />
                  DONATE</h5>
                            <p><b>Show support for the MORPHiS project.</b></p>
                            <p>I pledge the following regarding all money donated to the MORPHiS Bitcoin Donation Address ("the Fund"):</p>
                            <p>All money sent to The Fund will be used fully transparently.</p>
                            <p>I will only pay for expenses such as hosting and such incurred directly by the Project to Create the World Brain ("the Project"). I will not use it to cover personal expenses like eating, but perhaps will for things like travel if it is in the direct service of the Project. Before paying myself anything out of the Fund, I intend to be paying at least one thousand Bitcoins per year to such costs including and majorly salaries (excluding my own) before paying myself any salary. It will then be limited to one percent of incoming of the Fund. When the World Brain is capable of honestly deciding, it may then rule upon my compensation from the Fund from that point and beyond. I will turn over complete control of the Fund to the World Brain once it is legally or de facto capable of asserting such control.</p><br />
                            <p>Donate Bitcoins to the following address:<br />
                                <b>1EiaUzQynTP5WWd35rs81xHDXDPaF2ZepU</b></p>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="about-me"><p><b>I have been programing for all my life.</b>
                Ever since I was very young I loved computer programming. I contributed to the KDE open source project while in early High School for instance. My skill was noticed by a friend of my parents, and I was hired in grade 12, thus beginning my career in programing.</p>
                        <p>Later in life I realized I was very unhappy; both due to the state of the world and the boredom of being just a business programmer in the enterprise world, even in architect roles. While I have been successful, my experiences throughout life have shown me my true purpose, and that is where I am today.</p>
                        <p>I have dedicated myself to this project. Nothing will stop me from completing my life's work, my purpose in life. This is my calling. I am and for years already been working on this full time; and I will continue to do so until I can say: it is finished!</p></div>
                    <div className="contact">
                        <div className="photo" />
                        <h4><a className="fade" href="mailto:sam2015@morph.is"><img src="https://morph.is/v0.8/images/mail.png" /></a><br /><br /><a href="mailto:sam2015@morph.is">GET IN TOUCH</a></h4>
              Questions?<br />
              Interested in contributing to the project?<br />
                        <h6><a href="http://localhost:4251/.dmail/compose/samzu1ctt7kscitkrt5jft91gtw5c1i6aiujd6g5qrm13w3peph4kjusp737q5zr1cijr9rwmrcw3sgxf8143kw69zph55s71hcicqa" target="blank">SEND ME A DMAIL!</a></h6>
                    </div>
                </section>
                <footer>
                    <div className="footer-logo" />
                    <p>The MORPHiS software is an open source project and is free to use, copy and distribute with a GNU GPL v2 license.<br />
              Please contribute to the World Brain by running MORPHiS!<br /><br /><br />
                        <span className="small-text">Website created by <a href="http://www.citrusdesignstudio.com" target="blank">Citrus Design Studio</a></span></p>
                </footer>
            </div>
        );
    }
});