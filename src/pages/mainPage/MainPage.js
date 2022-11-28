import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NumbersList from '../../components/numbersList/NumbersList';
import { clearListAction, getNumberAction, getResultsListAction } from '../../redux/actions/actions';

function MainPage() {
  const dispatch = useDispatch()
  const number = useSelector(state => state.numbers.number)
  const results = useSelector(state => state.numbers.results)

  const onChangeText = (e) => {
    dispatch(getNumberAction(e.target.value))
  }

  const addSummOfNumbers = () => {
    dispatch(getResultsListAction(number))
  }

  const clearList = () => {
    dispatch(clearListAction())
  }

  return (
    <div>
        <h1>title</h1>
        <input type="number" onChange={onChangeText} value={number}/>
        <button onClick={addSummOfNumbers}>add</button>
        <button onClick={clearList}>clear</button>
        <NumbersList numbers={results} />
    </div>
  )
}

export default MainPage