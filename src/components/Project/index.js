import React, {useEffect, useState} from 'react';
import Layout from "../../views/layout";
import Modals from "../Modals";
import axios from "axios";
import Spinner from "../Spinner";

const Project = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [gallery, setGallery] = useState([])
    const [cName, setClassName] = useState('jsGridView');
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios('https://613b6401110e000017a455d2.mockapi.io/api/gallery')
            .then(({data}) => {
                setGallery(data)
                setIsLoading(false)
            })

    }, [])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <Layout>
            <div className='container my-2 p-4'>
                <p className='text-3xl	mt-8 tracking-wider	'>ПРОЕКТЫ</p>
                <div className='btn-div'>
                    <button className='btn' onClick={() => setIsOpen(true)}>Добавить проект</button>
                </div>
                <div className='btn-div mt-4'>
                    <button onClick={() => setClassName('jsGridView')}><i className='bx bxs-grid text-2xl'></i></button>
                    <button onClick={() => setClassName('jsListView')}><i className='bx bx-menu ml-4 text-3xl'></i></button>
                </div>
                <Modals modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} setGallery={setGallery} gallery={gallery}/>

                <div className={cName}>
                    {
                        gallery.map(el =>
                            <div className='card-project mt-8 '>
                                <img src={el.image} alt="gallery" className='img-project'/>
                                <div className='p-4'>
                                    <p>{el.title}</p>
                                    <p><i className='bx bx-calendar-alt'></i> {el.start_date} - {el.off_date}</p>
                                    <p><i className='bx bxs-user'></i> {el.author}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </Layout>
    );
};

export default Project;