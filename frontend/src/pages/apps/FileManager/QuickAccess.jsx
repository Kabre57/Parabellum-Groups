import React, {useState} from 'react'
import { Button, Icon } from '../../../componenets'
import { fileManagerIcons } from '../../../store/icons';

const QuickAccess = () => {
    const [show,setShow] = useState(true);
    const files = [
        {
            icon: fileManagerIcons.folderAlt,
            name : "UI Design"
        },
        {
            icon: fileManagerIcons.folderAlt,
            name : "DashParabellumGroups Resource"
        },
        {
            icon: fileManagerIcons.folderAlt,
            name : "Projects",
            ext : "xlsx"
        },
        {
            icon: fileManagerIcons.fileZipAlt,
            name : "All work",
            ext : "zip"
        },
        {
            icon: fileManagerIcons.fileSheetAlt,
            name : "Sales Reports",
            ext : "xlsx"
        },
    ]
  return (
    <>
        <div className="pb-3 relative flex justify-between items-center">
            <h6 className="font-heading font-bold text-base/tighter -tracking-snug text-slate-700 dark:text-white">Quick Access</h6>
            <button onClick={()=> setShow(!show)} className={`group text-sm font-medium text-primary-600 hover:text-primary-700 ${show ? 'active' : ''}`}>
                <div className="group-[.active]:hidden block">Show</div>
                <div className="group-[.active]:block hidden">Hide</div>
            </button>
        </div>
        <div className={`hidden [&.active]:block ${show ? 'active' : ''}`}>
            <div className="grid grid-flow-dense grid-cols-12 gap-4">
                {files.map((item,index) => {
                    return(
                        <div key={index} className="group/fileitem relative border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded col-span-12 xs:col-span-6 sm:col-span-4 xl:col-span-3 2xl:col-span-2">
                            <a href="#link" onClick={(e)=> e.preventDefault()} className="block py-6 px-4">
                                <div className="h-18 [&>svg]:h-full [&>svg]:mx-auto">
                                    {item.icon}
                                </div>
                                <div className="text-sm/snug text-center font-medium pt-4 flex justify-center"><span className="line-clamp-1">{item.name}</span> {item.ext && '.'+item.ext}</div>
                            </a>
                            <div className="absolute top-2 end-2 transition-all duration-300 hideable [&.hideable]:opacity-0 group-hover/fileitem:opacity-100">
                                <Button.Zoom size="sm"><Icon className="text-base/none" name="cross" /></Button.Zoom>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default QuickAccess