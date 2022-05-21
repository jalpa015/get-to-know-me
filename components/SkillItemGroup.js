import React from 'react'
import Item from './SkillItem'

export default class Skills extends React.Component {
    render() {
        let { name, items } = this.props
        return (
            <div className="columns">
                <div className="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet has-text-left">
                    <h4 className='text-black dark:text-white'>{name}</h4>
                    <div className="columns is-gapless is-multiline">
                    {
                        items.map((item, key) => 
                            <Item key={key}
                                img={'/skills/' + item.name + '.png'} 
                                color={item.color} 
                                value={item.value}/>
                        )
                    }
                    </div>
                </div>
                <style jsx>{`
                    h4 {
                        margin: 10px 20px;
                        font-weight: bold;
                    }
                `}</style>
            </div>
        )
    }
}