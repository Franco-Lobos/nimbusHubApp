import { useParams } from "@remix-run/react"

export default function DashboardSingle(){
    const {id} = useParams();
    return(
        <div>
            Hello from Dashboard Single {id}
        </div>
    )
}