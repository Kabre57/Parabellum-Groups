import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Dropzone from 'react-dropzone';

const File = ({
    defaultValue, id, placeholder, className, size,
    maxLength, max, min, disabled, required, name, multiple,
    ...props
}) =>  {
    const compClass = classNames({
        "flex items-center absolute top-0 start-0 z-1 w-full text-sm leading-4.5 ps-4 py-2 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded-[inherit] transition-all after:-top-px after:-end-px after:-bottom-px after:z-[3] after:h-9 after:text-slate-700 after:dark:text-white after:content-['Browse'] after:flex after:items-center after:bg-gray-100 after:dark:bg-gray-900 after:px-4 after:rounded-e-[inherit] after:border after:border-gray-200 after:dark:border-gray-800": true,
        [`${className}`]: className,
    });
    const [files, setFiles] = useState([]);
    function handleMultipleChange(event) {
        setFiles([...event.target.files]);
    }
    
    return (
        <div className="relative rounded w-full whitespace-nowrap">
            <input type="file" className="block relative w-full m-0 opacity-0 h-9 z-[2]"
                placeholder={placeholder && placeholder}
                id={id && id}
                maxLength={maxLength && maxLength}
                max={max && max}
                min={min && min}
                defaultValue={defaultValue && defaultValue}
                disabled={disabled && "disabled"}
                required={required && "required"}
                name= {name && name}
                multiple= {multiple && multiple}
                onChange={handleMultipleChange}
            />
            <label className={compClass} htmlFor={id && id}>
                {files.length ?
                    <span className="flex-grow text-ellipsis whitespace-nowrap overflow-hidden pe-4">
                        {files.map((item,index)=>
                            <React.Fragment key={index}>
                                {item.name}{files.length - 1 > index  && ", "}
                            </React.Fragment>
                        )}
                    </span>
                    : 
                    <span className="flex-grow">{props.children}</span>
                }
            </label>
        </div>
    );
}

const FileZone = ({ maxFiles, maxSize, errorText, children, className, ...props }) =>  {
    
    const [files, setFiles] = useState([]);
    // convert file size bytes to MB
    const bytesToMegaBytes = bytes => bytes / (1024 ** 2);
    // handles ondrop function of dropzone
    const handleDropChange = (acceptedFiles, file) => {
    file(acceptedFiles.map((file) =>
        Object.assign(file, {
            preview: URL.createObjectURL(file),
        })
        )
    );
    };

    const thumbs = files.map(file => (
    <div className="dz-preview dz-processing dz-image-preview dz-complete" key={file.name}>
        <div className="dz-image">
            <img src={file.preview} alt="preview" />
        </div>
        <div className="dz-details"> 
            <div className="dz-size"><span><strong>{file.size}</strong> KB</span></div> 
            <div className="dz-filename"><span>{file.name}</span></div> 
        </div>
    </div>
    ));

    return (
        <Dropzone 
        onDrop={acceptedFiles => handleDropChange(acceptedFiles, setFiles)} 
        maxFiles={maxFiles}
        maxSize={maxSize}
        onDropRejected={() => alert(errorText)}
      >
          {({getRootProps, getInputProps}) => (
              <div {...getRootProps()} className={`dropzone dz-clickable ${className ? className : ''}`}>
                <input {...getInputProps()} />
                {(files.length === 0 && !children) && (
                    <div className="dz-message">
                        <span className="block text-sm text-slate-400">Drag and drop file </span>
                        <span className="block text-base text-slate-400 mb-1 uppercase">or</span>
                        <button className="relative inline-flex items-center text-center align-middle text-sm font-bold leading-4.5 rounded px-5 py-2 tracking-wide border border-primary-600 text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all duration-300">SELECT</button>
                    </div>
                )}
                {(files.length === 0 && children) && children}

                {thumbs}
              </div>
          )}
        </Dropzone>
    );
}

export default File;

File.Dropzone = FileZone;

