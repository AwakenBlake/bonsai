import {Component} from 'react'
import Entry from './Entry'

class Titles extends Component{
    constructor(){
        super()
        this.state = {
            titles: [
                {name: "Stormborn of the House Targaryen"},
                {name: "First of Her Name"},
                {name: "the Unburnt"},
                {name: "Queen of the Andals and the First Men"},
                {name: "Khaleesi of the Great Grass Sea"},
                {name: "Breaker of Chains"},
                {name: "Mother of Dragons"}  

            ]

        }
    }




    
    deleteTitle = (index) => {
        console.log(`${index} deleted`)
        const titles = [...this.state.titles]
        titles.splice(index, 1)
        this.setState({
            titles
        })

    }

    render(){
        return(
            <div>
                {/* <h1>Title mapping/buttons prepass</h1> */}
                {this.state.titles.map((element, index) => {
                    return (
                        <div key = {index} className="title-list">
                            <h2>{element.name}</h2>
                            <h2></h2>
                            <button onClick={() => {this.deleteTitle(index)}}>Delete Title</button>
                            </div>
                            // <Entry passedTitle={this.state.name}/>
                        
                    )
                })}
            </div>
        )
    }

    

}



export default Titles


