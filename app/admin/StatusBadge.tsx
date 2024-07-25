import { TicketStatus } from "../types";

const StatusBadge = ({ status }: { status: TicketStatus }) => {
    const commonClasses = "py-[5px] px-[10px] rounded-lg w-[120px] text-nowrap flex justify-center"
    switch (status) {
        case "new":
            return <div className={commonClasses + " bg-red-200"}>New</div>
        case "inProgress":
            return <div className={commonClasses + " bg-blue-200"}>In Progress</div>
        case "resolved":
            return <div className={commonClasses + " bg-green-200"}>Resolved</div>
    }
}

export default StatusBadge