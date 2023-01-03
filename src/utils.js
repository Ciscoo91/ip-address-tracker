import {useState, useEffect} from "react"


export const useFetch = (url) => {
    const [data, setData] = useState({data: null, loading: true})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        (async function(){
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            if(response.ok){
                setData({
                    data: data,
                    loading: false
                })
            }else{
                setData(s => ({...s, loading: false}))
            }
        })()
    }, [])


    return [data.data, data.loading, setData]
}


export const isIPOrDomain = (input) => {
    return input.match(/(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/) ? true : false
}

