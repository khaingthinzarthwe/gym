import { SelectedPage } from '@/shared/types';
import React from 'react'

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <div className=''>
        <div className=''>
            <div className=''></div>
        </div>
    </div>
  )
}

export default Benefit