import Link from 'next/link'
import AdminButtons from './AdminButtons'

export default function AnnouncementCard({ id, title, announcement_content, startDate, endDate, isAdmin }) {

    return <>
        <div className="card announcement-card">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                <p className="card-text">{announcement_content}</p>

                <div><em>Start Date: </em> {startDate}</div>
                {
                    endDate !== null && endDate !== '' && <div><em>End Date: </em> {endDate}</div>
                }
            </div>
            <div className='card-footer'>
                <div className='card-footer-content'>
                    <Link href={`/admin/announcements/view/${id}`}>
                        <a className="btn btn-primary">View</a>
                    </Link>
                    {
                        isAdmin !== undefined && isAdmin && <AdminButtons
                            deleteUrl={`announcements/${id}`} editUrl={`/admin/announcements/edit/${id}`} />
                    }
                </div>

            </div>
        </div>
    </>
}