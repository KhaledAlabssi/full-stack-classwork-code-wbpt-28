import React from 'react'
import { useAppContext } from '../context/appContext'
import Modal from './Modal'
import ViewEntryModal from './ModalTwo'


export default function EntryList() {
const {dairies, modalHandler, selectedDairy} = useAppContext()


  return (
    <div>
       {dairies?.map((i) => (
        <p>
          {i.title}
          <button onClick={() => modalHandler(i)}>Show more</button>
        </p>
      ))}

      <Modal dairy={selectedDairy}/>
    <ViewEntryModal />
    </div>
  )
}
