import { useState } from "react"

import { requestOptions } from "./../utils/requestOptions"
import AnnouncementCard from './../components/AnnouncementCard'

export default function Home(props) {
    const { announcements } = props

    return <div className="home-page">
        <div className='container home-page-container'>

            {
                announcements.map((announcement) => {
                    return <>
                        <AnnouncementCard key={announcement.id} {...announcement} isAdmin={true}/>
                    </>
                })
            }

        </div>
    </div>
}


export async function getServerSideProps(context) {
    const url = process.env.apiExternalRoute + 'announcements'
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
  