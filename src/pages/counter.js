import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

class Counter extends React.Component {
    constructor(){
        super()
        this.state = { count: 0 }
    }
    render(){
        return <Layout>
                    <div>
                        <h1>Counter</h1>
                        <p>current count: {this.state.count}</p>
                        <button onClick={() => 
                            this.setState(
                                { count: this.state.count -1}
                                )}>minus
                        </button>
                        <button onClick={() => 
                            this.setState({ count: this.state.count +1}
                            )}>plus
                        </button>
                        <br />
                    </div>
                    <p>
                        <Link to="/">Go back home</Link>
                    </p>
                </Layout>
    }
}
export default Counter