import { StackActions, NavigationActions } from 'react-navigation'

const shuffle = (paramArray) => {
  const array = paramArray
  let ctr = array.length
  let temp
  let index

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr)
    // eslint-disable-next-line no-plusplus
    ctr--
    temp = array[ctr]
    array[ctr] = array[index]
    array[index] = temp
  }
  return array
}
const resetStackAction = (routeName) => {
  const stackAction = StackActions.reset({
    key: null,
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  })
  return stackAction
}

export { shuffle, resetStackAction }
