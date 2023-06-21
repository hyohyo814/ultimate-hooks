import { useState, useEffect } from 'react'
import axios from 'axios'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSubmit = () => {
    setValue('')
  }

  return {
    type,
    value,
    onChange,
    onSubmit
  }
}

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    const init = async () => {
      const res = await axios.get(baseUrl)
      setResources(res.data)
    }
    init()
  }, [baseUrl, resources])

  const create = async (resource) => {
    const res = await axios.post(baseUrl, resource)
    return res.data
  }

  const service = {
    create
  }

  return [
    resources, service
  ]
}