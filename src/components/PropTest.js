import React, {Component} from 'react'
import ContactCard from './ContactCard'

class PropTest extends Component {
    render() {
        return (
            <div className="contact-list">
                <ContactCard
                    contact={{
                        imgURL: 'https://i.imgur.com/41b1E2y.jpg',
                        name: 'Hello World',
                        phone: '000 000 000',
                        email: 'lul@mwo.lmao'
                    }}
                />
                <ContactCard
                    contact={{
                        imgURL: 'https://i.imgur.com/ShJTlO0.jpg',
                        name: 'Hello yep',
                        phone: '000 000 000',
                        email: 'notjesus@mwo.lmao'
                    }}
                />
                <ContactCard
                    contact={{
                        imgURL: 'https://i.imgur.com/BTJhFno.jpg',
                        name: 'Hello omg',
                        phone: '000 000 000',
                        email: 'jesus@mwo.lmao'
                    }}
                />
            </div>
        )
    }
}

export default PropTest
