'use client'
export const handleFocus = (
  event: React.FocusEvent<HTMLInputElement>
): void => {
  event.target.select();
};


export const getLocalStorege = (value:any)=>{
  return typeof window !== "undefined" ? window.localStorage.getItem(value) : false
}

export const getToken = () => {
  const token = getLocalStorege('token')
  return token
}