import { useState } from 'react'

const Query: React.FC = () => {
  const [url, setUrl] = useState('https://api.example.com/data')
  // const [response, setResponse] = useState<unknown>(null)

  const handleSubmit = async (): Promise<void> => {
    console.log('🍟===')
    await window.api.sendRequest({
      url,
      method: 'GET',
      headers: {},
    })
    // setResponse(result)
  }

  return (
    <div>
      <input value={url} onChange={(e) => setUrl(e.target.value)} />
      <div onClick={handleSubmit} className="color-[#fff}">
        Send
      </div>
      {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
    </div>
  )
}
export default Query
