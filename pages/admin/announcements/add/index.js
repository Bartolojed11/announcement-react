import { useEffect, useState } from 'react';

import AnnouncementViewComponent from './../../../../components/AnnouncementView'

import { stateSetter } from './../../../../utils/form'
import { toastSuccess, toastError } from "./../../../../utils/toasts"
import { requestOptions } from './../../../../utils/requestOptions'

import Moment from 'moment'
import toast, { Toaster } from 'react-hot-toast';

export default function AnnouncementAdd() {

    const [announcement, setAnnouncement] = useState({
        id: 0,
        title: '',
        announcement_content: '',
        startDate: '',
        endDate: ''
    })



    async function handleSubmit(event) {
        event.preventDefault()
        const url = process.env.apiExternalRoute + 'admin/announcements/store'

        const token = process.env.TOKEN

        let formData = {...announcement}
        formData['startDate'] = Moment(formData.startDate).format('YYYY-MM-DD hh:mm:ss')

        if (formData.endDate !== null) {
            formData['endDate'] = Moment(formData.endDate).format('YYYY-MM-DD hh:mm:ss')
        }


        fetch(url, requestOptions('POST', {...formData}, { token }))
            .then(response => response.json())
            .then((response) => {
                if (response.error === undefined ) {
                    toastSuccess('Updated Successfully!');
                } else {
                    toastError('Fail to update!');
                }
            })
    }

    function handleInputChange(event) {
        stateSetter(event, setAnnouncement)
    }


    return <>
        <div className='announcement-edit-page'>
            <div className='container announcement-edit-container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input value={announcement.title} onChange={handleInputChange} name="title" required
                            type="text" className="form-control" id="title" aria-describedby="title" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="announcement_content" className="form-label">Content</label>
                        <textarea value={announcement.announcement_content} onChange={handleInputChange} required
                            rows={5} cols={5}
                            name="announcement_content" type="checkbox" className="form-control" id="announcement_content" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="startDate" className="form-label">Start Date</label>
                        <input value={announcement.startDate} onChange={handleInputChange} name="startDate" required
                            type="datetime-local" className="form-control" id="startDate" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="endDate" className="form-label">End Date</label>
                        <input value={announcement.endDate} onChange={handleInputChange} name="endDate"
                            type="datetime-local" className="form-control" id="endDate" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
}