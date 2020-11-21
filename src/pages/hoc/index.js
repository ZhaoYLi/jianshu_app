import myHOC from './myHOC';

const myApp = (props) => {
  // console.log('props--------', props)
  const { x, y } = props.mosePosition
  return (
    <div style={{ height: 300, textAlign: 'center', background: 'green' }}>
      <p>鼠标位置为：({x},{y})</p>
    </div>
  )
}

export default myHOC('hoc_test_page')(myApp)
