import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.me = {
            fullname: 'Habib Koubaa',
            email: 'LEH95@gmail.com',
            age: '27',
            img: 'https://media.npr.org/assets/img/2020/05/14/dsc00408-70c0e0300202c2313c2b662982616a671e0c1c03.jpg',
        };
        this.state={count : 0}
    }
    componentDidMount(){
        setInterval(() => {
        this.setState(prevState=>({
            count: prevState.count + 1
        })) 
            }, 1000)
    }
render(){
    return (
    <div>
        <h2>{this.me.fullname}</h2>
        <h2>{this.me.email}</h2>
        <h2>{this.me.age}</h2>
        <h2>{this.state.count}</h2>
        <img src={this.me.img} alt='img'/>
    </div>
    )
}}