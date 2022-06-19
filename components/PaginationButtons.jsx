import { useRouter } from "next/router"
import Link from "next/link"
export default function PaginationButtons() {
    const router = useRouter()

    const startIndex = router.query.startIndex || 0
    return (
        <div>

        </div>
    )
}