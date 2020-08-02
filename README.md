<h1 align="center"> Decentralized Cloud</h1>


<p align="center">
  <img width="100" height="100" src="https://i.ibb.co/XFDgzG0/logo.png"> 
</p>



## Vision 🌈
Imagine there is a global drive, there are no hardware (data cables) or software(google photos, iTunes) boundaries for accessing it.
You can access your data anytime you want, from any platform.
and the best part you are the owner of the data.
No one I repeat no one can see your data, (as we encrypt it with AES)
You can share data with your friends on one click.
You can roam without thinking that "Oh my hard drive may crash, I should take backup"
or "This cloud service gonna increase its subscription".
In contrast, think that you don't even have to pay much for it. just minimal gas costs
that's what **Decentralized Cloud** is......!

## Links
- ### Runner Up Entry at DevFest organised by BITS Goa. </br>
- [Presentation/ Algos](https://docs.google.com/presentation/d/1VjFbRpdo2TxCSc-uY6Fq671_KRXBkoPpbQQf0PSMr9k/edit#slide=id.g25f6af9dd6_0_0)
- [Live on : https://decentcloud.herokuapp.com/](https://decentcloud.herokuapp.com/)
- Deployed on Matic Mumbai Testnet

## Problems With Centralized Cloud Storage 

- User does not own their data
- Privacy <br/>
Secret Exfiltration from Third Parties <br/>
Secret Exfiltration from Law Enforcement <br/>
Secret Exfiltration from Foreign Powers <br/>
- Expensive <br/>
- Single point of failure | Dos attacks 
- Can’t scale up vertically after a certain limit.


## How Decentralized Cloud storage, Gonna make people's lives better!
- User own their data
- Secured by encryption, no one besides you can see the content of the file
- Share files with colleagues, with one click.
- Cheaper | No cost rather than gas
- No single point of failure
- Scale-up with increasing nodes


## Instructions 📝 

### Installation

Get started quickly by cloning this repository. Install the dependencies
```sh
$ cd client && npm install
```
### Testing on Local Truffle Blockchain

* Create .secret file with your Mnemonic
* In root directoy create .secret file
* Open metamask and Go to Setting
* Go to Security and policy
* Click Reveal seed words and Enter password
* Copy the mnemonic (never push it to public repo)
* Paste it in .secret file

Truffle Development Console
```sh
$ truffle develop
```
This will open truffle developer console and you will get 10 Account Addresses, import some of them in metamask by import account option.

Truffle Compile
```sh
$ truffle compile
```
Truffle Migration Local Network
```sh
$ truffle migrate
```
Truffle Migration Matic Network
```sh
$ truffle migrate --network matic
```
### Starting the Server
```sh
$ cd client && npm start
```
 
## Developed By 🏁

[**Abhishek Vispute**](https://github.com/abhishekvispute/)

