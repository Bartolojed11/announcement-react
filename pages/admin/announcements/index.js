import { useState } from 'react';

import { requestOptions } from "./../../../utils/requestOptions"
import AnnouncementCard from './../../../components/AnnouncementCard'


export default function Announcements(props) {

    const { announcements } = props
    console.log("🚀 ~ file: index.js ~ line 10 ~ Announcements ~ announcements", announcements)

    return <div className="announcement-home-page">
        <div className='container announcement-container'>
            {
                announcements.length > 0 && announcements.map((announcement) => {
                    return <>
                        <AnnouncementCard {...announcement} isAdmin={true} />
                    </>
                })
            }

            {
                announcements.length == 0 && <p className="text-center">empty announcements</p>
            }

        </div>
    </div>
}

export async function getServerSideProps(context) {
    const url = process.env.apiExternalRoute + 'announcements'
    console.log("🚀 ~ file: index.js ~ line 27 ~ getServerSideProps ~ url", url)
    const token = process.env.TOKEN

    const response = await fetch(url, requestOptions('GET', {}, { token }))

    const json = await response.json()
    const announcements = json.data || []

    return {
        props: {
            announcements
        }
    }
}
