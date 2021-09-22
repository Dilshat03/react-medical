import React, {useState} from 'react';
import Modal from 'react-modal';
import {useForm} from "react-hook-form";
import axios from "axios";

const Modals = ({modalIsOpen, setIsOpen, setGallery,gallery}) => {
    const {register, handleSubmit} = useForm()
    const [image, setImage] = useState({})


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    const closeModal = () => {
        setIsOpen(false)
    }


    const onSubmit = (data) => {
        console.log(image)
        data.image = image.url
        axios.post('https://613b6401110e000017a455d2.mockapi.io/api/gallery', data)
            .then(({data}) => setGallery([...gallery,data]))
        closeModal()
    }


    const handleChange = (e) => {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', 'gallery')
        axios.post('https://api.cloudinary.com/v1_1/dkqaxfzgq/upload', formData)
            .then(({data}) => setImage(data))
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}>
                <button onClick={closeModal}>×</button>
                <div
                    className="flex flex-col max-w-md px-4 py-8    d sm:px-6 md:px-8 lg:px-10">
                    <div className="p-6 mt-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <label htmlFor="image">Добавить фото</label>
                                    <input type="file" id="image"

                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                           placeholder="Название проекта"
                                           {...register('image', {required: true})}
                                           onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <label htmlFor="title">Название проекта</label>
                                    <input type="text" id="title"
                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                           placeholder="Название проекта"
                                           {...register('title', {required: true})}
                                    />
                                </div>
                            </div>
                            <div className=" mb-2">
                                <div className=" relative ">
                                    <label htmlFor="author">Имя автора</label>
                                    <input type="text" id="author"
                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                           placeholder="Имя автора"
                                           {...register('author', {required: true})}
                                    />
                                </div>
                                <div className=" relative ">
                                    <label htmlFor="start_date">Дата начала проекта</label>
                                    <input type="date" id="start_date"
                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                           {...register('start_date', {required: true})}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <label htmlFor="off_date">Конец проекта</label>
                                    <input type="date" id="off_date"
                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                           {...register('off_date', {required: true})}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full my-4">
                                <button type="submit"
                                        className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Сохранить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Modals;