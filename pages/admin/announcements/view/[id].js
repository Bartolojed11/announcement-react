import AnnouncementViewComponent from './../../../../components/AnnouncementView'

import { requestOptions } from "./../../../../utils/requestOptions"

export default function AnnouncementView(props) {
    const { announcement } = props

    return <>
        <div className='announcement-view-page'>
            <div className='container announcement-view-container'>
                <AnnouncementViewComponent {...announcement} />
            </div>
        </div>
    </>
}

export async function getServerSideProps(context) {

    const { id } = context.params
    const url = process.env.apiExternalRoute + 'announcements/' + id

    const token = process.env.TOKEN

    const response = await fetch(url, requestOptions('GET', {}, { token }))

    const json = await response.json()
    const announcement = json.data || []


    return {
        props: {
            announcement
        }
    }
}