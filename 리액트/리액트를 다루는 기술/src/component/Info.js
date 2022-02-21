import React from "react"
import useCustomHookSample from "./useCustomHookSample"

const Info = () => {
  const [state, onChange] = useCustomHookSample({
    name: "",
    nickname: "",
  })

  const { name, nickname } = state

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>

      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  )
}

export default Info
