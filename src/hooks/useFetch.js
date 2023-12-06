import { useEffect, useState } from "react";

export function useFetch(url, method = 'GET') {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState('')

  function postData(postData) {
    setOptions({
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  }
  useEffect(() => {
    async function loadData(fetchOptions) {
      setIsLoading(true)
      try {
        const res = await fetch(url, {...fetchOptions})
        if (!res.ok) {
          throw new Error(res.statusText)
        }

        const json = await res.json()
        setData(json)
        setError(null)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (method === 'GET') {
      loadData()
    }

    // in the first run, options is still empty
    // in consumer component, when postData is called, it will set the options
    // options as dependency, will re-trigger useEffect
    if (method === 'POST' && options) {
      loadData(options)
    }

  }, [url, method, options])

  return { data, isLoading, error, postData}

}