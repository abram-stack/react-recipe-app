import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
      try {
        const res = await fetch(url)
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
    loadData()
  }, [url])

  return { data, isLoading, error}

}