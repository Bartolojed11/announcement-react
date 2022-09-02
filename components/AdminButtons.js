import Link from 'next/link'
import { requestOptions } from './../utils/requestOptions'

export default function AdminButtons({ deleteUrl, editUrl }) {

    function deleteData(deleteUrl) {
        const url = process.env.apiExternalRoute + deleteUrl

        location.reload();
        
        return;
        fetch(url, requestOptions('GET'))
            .then(response => response.json())
            .then((response) => {

                if (response.status === 'success') {

                }
            })
    }

    return <>
        {
            editUrl !== undefined && <Link href={`${editUrl}`}>
                <a className="btn btn-secondary">Edit</a>
            </Link>
        }

        {
            deleteUrl !== undefined && <button onClick={() => deleteData(deleteUrl)}
                type="button" className="btn btn-danger">Delete</button>
        }
    </>
}