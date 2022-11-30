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