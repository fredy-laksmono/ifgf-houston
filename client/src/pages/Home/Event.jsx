import InfoPanel from "./InfoPanel";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Document, Page, pdf } from '@react-pdf/renderer';
import PDF from 'react-pdf-js';

const Event = () => {
    const navigate = useNavigate();

    // State to manage the selected language
    const [language, setLanguage] = useState('English');


    const getPageNumber = () => {
        const startDate = new Date(new Date().getFullYear(), 0, 4); // January 4th of the current year
        const currentDate = new Date();
        const differenceInTime = currentDate - startDate;
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        return differenceInDays > 21 ? 1: differenceInDays + 6; // Ensure page number starts from 7
      };
    const [page, setPage] = useState(getPageNumber());
  const [pages, setPages] = useState(null);

  const onDocumentComplete = (pages) => {
    setPages(pages);
    setPage(getPageNumber());
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

    // PDF file paths
  const pdfFiles = {
    English: "/Inggris.pdf",
    Indonesian: "/INDONESIAN.pdf"
  };

  // Function to handle language change
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

    // Function to handle PDF download
    const handleDownload = () => {
        const currentPdfFile = pdfFiles[language];
        const link = document.createElement('a');
        link.href = currentPdfFile;
        link.download = `${language}.pdf`;
        document.body.appendChild(link); // Required for Firefox
        link.click();
        document.body.removeChild(link);
      };

    const handleClick = () => {
        navigate('/indomarket');
      };

      
    

    // const indoMarket = (
    //     // <p className=' pt-4'>
    //     //     <a href="https://bit.ly/easter_bkkih" className="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded" target="_blank" rel="noreferrer">
    //     //         RSVP Here
    //     //     </a>
    //     // </p>
    //     <button className=" text-lg bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 self-center lg:self-start lg:mt-0 rounded-3xl w-32" onClick={handleClick}>View Menu</button>
    // )
    return (
        <div className=" bg-black text-white pb-4 ">
            <h1 className=" font-bold text-4xl pt-8 pb-5">21 Days Prayer & Fasting</h1>
            {/* <InfoPanel imagePath="https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1" imageAlt="IFGF Houston Bazzar May 6 2023 Promo Image" title="IFGF INDO MARKET" body={indoMarket}/> */}
            <select className=" text-black"value={language} onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="Indonesian">Indonesian</option>
      </select>
      
      <div className="flex justify-center items-center pt-3">
      <PDF
        file={pdfFiles[language]}
        onDocumentComplete={onDocumentComplete}
        page={page}
      />
      </div>
      <div className="flex gap-4 justify-center">
      {page > 1 && <button onClick={handlePrevious}>Previous</button>}
      {page < pages && <button onClick={handleNext}>Next</button>}
      </div> 
      <button className=" pt-3 "onClick={handleDownload}>
        Download PDF ({language})
      </button>
        </div>
    )
}

export default Event