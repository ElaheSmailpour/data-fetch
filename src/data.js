import React, {Component} from 'react'

export default class Data extends Component{

state={

    text:[]

}

componentDidMount(){
    window.fetch("http://localhost:5000/todos")
        .then((response) => {
            response.json()
            .then((data) => {
                    console.log("data=",data);
                   
                    this.setState({text:data.name})
                   
                }
            )
})
}

render(){

    return (
		<div className="todos">
		
				<p>Data...</p>
				
                      <p>{this.state.text}</p>
                     
                     </div>
                    
		
		
	);
}

}
