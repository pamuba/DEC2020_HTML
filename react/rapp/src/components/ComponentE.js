import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext, { UserConsumer } from './userContext'

export class ComponentE extends Component {
    // static contextType = UserContext
	render() {
		return (
			<div>
                 {/* Component E context {this.context}  */}
				<ComponentF />
			</div>
		)
	}
}
// Component.contextType = UserContext
export default ComponentE