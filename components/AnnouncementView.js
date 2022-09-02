export default function AnnouncementView({ title, announcement_content, startDate, endDate }) {

    return <>
        <div className="card text-center">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                <p className="card-text">{announcement_content}</p>
            </div>
            <div className="card-footer text-muted">
                <div><em>Start Date: </em> {startDate}</div>
                {
                    endDate !== null && endDate !== '' && <div><em>End Date: </em> {endDate}</div>
                }

            </div>
        </div>
    </>
}