import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import './Dropzone.css'

export default function MyDropzone(props) {
    const onDrop = useCallback((acceptedFiles) => {
        props.upload(acceptedFiles);
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,regular,600,700,800" rel="stylesheet" />
                <div className="second-bg" />
                <div className="main-container u-center">
                    <div className="uploading__big-bar uploading__bar" />
                    <div className="container u-center">
                        <div className="uploading__small-bar uploading__bar" />
                        <div className="c-t" />
                        <div className="c-r" />
                        <div className="c-b" />
                        <div className="c-l" />
                        {/* left side text  */}
                        <div className="u-center l-side ">
                            <svg className="dd-svg" fill="#cfcfcf" xmlns="http://www.w3.org/2000/svg" width={612} height={612} viewBox="0 0 612 612">
                                <path d="M494.7 255c-17.85-86.7-94.35-153-188.7-153-73.95 0-137.7 40.8-168.3 102C58.65 214.2 0 277.95 0 357c0 84.15 68.85 153 153 153h331.5c71.4 0 127.5-56.1 127.5-127.5 0-66.3-53.55-122.4-117.3-127.5zM357 331.5v102H255v-102h-76.5L306 204l127.5 127.5H357z" />
                            </svg>
                            <p className="dd-text ">Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
