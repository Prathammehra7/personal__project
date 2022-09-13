import React from 'react'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../Ul/Card'

const Values = () => {
  return (
<section className='values'>
    <div className='container values__container'>
        <div className='values__left'>
            <div className='values__image'>
            <img src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80" alt="Values Image" />
            </div>
        </div>
        <div className='values__right'>
            <SectionHead  icon={<GiCutDiamond/>}title="Values" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nisi nobis enim unde pariatur nulla.</p>
            <div className="values__wrapper">
                {
                    values.map(({id, icon, title, desc})=>{
                        return <Card key={id} className="values__value">
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{desc}</small>
                            </Card>
                    })
                }
            </div>
        
        </div>
    </div>
</section>

    )
}

export default Values