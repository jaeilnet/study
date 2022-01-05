// 액션 타입 정의
const INCREASE = "counter/INCREASE" as const
const DECREASE = "counter/DECERASE" as const
const INCREASE_BY = "counter/INCREASE_BY" as const

//  액션 생성함수 타입정의
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })
export const increase_by = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
})

// 초기 값에 대한 타입 정의
type CounterState = {
  count: number
}

// 초기 값
const initialState: CounterState = {
  count: 0,
}

// 리듀서 액션에 대한 타입 정의
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increase_by>

function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 }
    case DECREASE:
      return { count: state.count - 1 }
    case INCREASE_BY:
      return { count: state.count + action.payload }
    default:
      return state
  }
}

export default counter
