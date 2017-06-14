// 判断是否是其中一个
export const oneOf = (value, list) => {
  for (let i =0; i < list.length; i++) {
    if (value === list[i]) {
      return true
    }
  }
  return false
}
