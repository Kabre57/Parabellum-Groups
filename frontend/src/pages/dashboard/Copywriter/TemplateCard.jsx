import React from 'react'
import { Avatar, Card } from '../../../componenets'

const TemplateCard = ({title, icon, excerpt, className, theme}) => {

  return (
    <Card className="h-full">
        <Card.Body>
            <Avatar size="rg" rounded variant={theme} className="mb-3" icon={icon}></Avatar>
            <h5 className="text-xl font-heading font-bold text-slate-700 dark:text-white mb-1">{title}</h5>
            <p className="text-slate-600 dark:text-slate-400">{excerpt}</p>
        </Card.Body>
    </Card>
  )
}

export default TemplateCard