import React, {Component} from 'react'

class Test extends Component {
    styles = {
        fontSize: 34
    }

    timeOfDay() {
        const date = new Date(2019, 3, 12, 13)
        const hours = date.getHours()

        if (hours < 12) {
            this.styles.color = '#04756F'
            return 'morning'
        } else if (hours >= 12 && hours < 17) {
            this.styles.color = '#8914A3'
            return 'afternoon'
        } else {
            this.styles.color = '#D90000'
            return 'night'
        }
    }

    render() {
        return <h1 style={this.styles}>Good {this.timeOfDay()}</h1>
    }
}

export default Test
