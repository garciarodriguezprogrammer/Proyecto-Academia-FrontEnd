import { myInscriptionsCall } from "../../services/apiCalls"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const Inscriptions = () => {

    const token = useSelector(state => state.auth.token)
    const id = useSelector(state => state.auth.userId)
    console.log("Este es el id "+ id)
    useEffect(() => {
        const getInscriptions = async() => {
            const res = await myInscriptionsCall(token, id);
            console.log(res)
        }
        getInscriptions()
    }, [id])
}