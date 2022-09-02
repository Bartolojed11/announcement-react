import { useState } from 'react';

import { requestOptions } from "./../../../utils/requestOptions"
import AnnouncementCard from './../../../components/AnnouncementCard'


export default function Announcements() {

    const [announcements, setAnnouncements] = useState([
        {
            id: 1,
            title: 'title',
            content: 'content',
            start_date: '',
            end_date: null
        },
        {
            id: 1,
            title: 'title',
            content: 'content',
            start_date: '',
            end_date: null
        },
    ])

    // useEffect(() => {
    //     const url = process.env.apiExternalRoute + 'categories'

    //     fetch(url, requestOptions('GET'))
    //         .then(response => response.json())
    //         .then((response) => {

    //             if (response.status === 'success') {
    //                 setCategories(response.data.categories)
    //             }
    //         })
    // }, [])

    return <div className="announcement-home-page">
        <div className='container announcement-container'>

            {
                announcements.map((announcement) => {
                    return <>
                        <AnnouncementCard {...announcement} isAdmin={true}/>
                    </>
                })
            }

        </div>
    </div>
}