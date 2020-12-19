import React, {useContext} from 'react';
import HistoryContext from '../storage/HistoryContext'
import Storage from '../storage/Storage'

const SaveHistory = ({price, discount, final}) =>{
    const data = useContext(HistoryContext)
    const previousHistory = [];
    previousHistory=data.history;
    newHistory = [...previousHistory, { id:previousHistory.length, value:price, discount, final}]
    Storage.setToken(newHistory)
    data.setHistory(newHistory)
}


const deleteHistory = ({id}) =>{
    const data = useContext(HistoryContext)
    const previousHistory = [];
    previousHistory=data.history;
    newHistory = previousHistory.delete(id)
    Storage.setToken(newHistory)
    data.setHistory(newHistory)
}

export default {SaveHistory, deleteHistory};
